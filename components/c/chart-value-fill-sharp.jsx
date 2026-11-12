import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g_taxtb1p {
  fill: currentColor;
  d: path("M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Zm3.293 5.293a.999.999 0 1 0 1.414 1.414L7 11.414V15a1 1 0 0 0 2 0V9a1.002 1.002 0 0 0-1.707-.707ZM19 9a.997.997 0 0 0-1-1h-4a1 1 0 0 0 0 2h1.586l-4.293 4.293a.999.999 0 1 0 1.414 1.414L17 11.414V13a1 1 0 0 0 2 0Z");
}
</style><path class="g_taxtb1p"/>`,
		"fallback": "coolicons:chart-value-fill-sharp",
	});
}

export default Component;
