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
		"content": `<style>.cyr1yyb5k {
  fill: currentColor;
  d: path("m13.586 7l4.707-4.707A1 1 0 0 1 20 3v6.838l.949 2.846c.119.359.026.755-.242 1.023l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1-.242-1.023L4 9.838V3a1.002 1.002 0 0 1 1.707-.707L10.414 7Zm-3.879 4.293a.999.999 0 1 0-1.414 1.414l1 1a.999.999 0 1 0 1.414-1.414Zm6 1.414a.999.999 0 1 0-1.414-1.414l-1 1a.999.999 0 1 0 1.414 1.414ZM12.01 15H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="cyr1yyb5k"/>`,
		"fallback": "coolicons:fox-fill-sharp",
	});
}

export default Component;
