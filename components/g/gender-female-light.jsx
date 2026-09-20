import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uqhw7_9sy {
  fill: currentColor;
  d: path("M206 96a78 78 0 1 0-84 77.75V202H88a6 6 0 0 0 0 12h34v26a6 6 0 0 0 12 0v-26h34a6 6 0 0 0 0-12h-34v-28.25A78.09 78.09 0 0 0 206 96M62 96a66 66 0 1 1 66 66a66.08 66.08 0 0 1-66-66");
}
</style><path class="uqhw7_9sy"/>`,
		"fallback": "ph:gender-female-light",
	});
}

export default Component;
