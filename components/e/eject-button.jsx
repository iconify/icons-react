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
		"content": `<style>.fmf6wp8tz {
  fill: currentColor;
  d: path("M53.214 10.787c-11.715-11.716-30.711-11.716-42.426 0c-11.717 11.715-11.717 30.711 0 42.426c11.715 11.716 30.711 11.716 42.426 0s11.715-30.711 0-42.426M48 43.351H16V37.65h32zm-32-9.702l16-19l16 19z");
}
</style><path class="fmf6wp8tz"/>`,
		"fallback": "emojione-monotone:eject-button",
	});
}

export default Component;
