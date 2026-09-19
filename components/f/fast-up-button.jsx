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
		"content": `<style>.vqusuabbu {
  fill: currentColor;
  d: path("M53.214 10.787c-11.715-11.715-30.711-11.715-42.426 0c-11.717 11.717-11.717 30.711 0 42.426c11.715 11.715 30.711 11.715 42.426 0s11.715-30.71 0-42.426m-3.213 35.211h-36L25.88 33.279H14.001l18-19.28l18 19.28H38.122z");
}
</style><path class="vqusuabbu"/>`,
		"fallback": "emojione-monotone:fast-up-button",
	});
}

export default Component;
