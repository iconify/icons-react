import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dsvm5n1ip {
  fill: currentColor;
  d: path("M53.213 10.787c-11.715-11.715-30.711-11.715-42.426 0c-11.716 11.717-11.716 30.711 0 42.426s30.711 11.715 42.426 0s11.716-30.71 0-42.426M50 32.723L32 51.998L14 32.723h11.879L14 20h36L38.121 32.723z");
}
</style><path class="dsvm5n1ip"/>`,
		"fallback": "emojione-monotone:fast-down-button",
	});
}

export default Component;
