import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.st95tnqco {
  fill: currentColor;
  d: path("M25 27a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM16 7a1 1 0 0 1 .707.293l4 4l.068.076a1 1 0 0 1-1.406 1.406l-.076-.068L17 10.414v11.172l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.338.068l-.076-.068l-4-4l-.068-.076a1 1 0 0 1 1.406-1.406l.076.068L15 21.586V10.414l-2.293 2.293a1 1 0 1 1-1.414-1.414l4-4l.073-.066A1 1 0 0 1 16 7m9-4a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z");
}
</style><path class="st95tnqco"/>`,
		"fallback": "fluent:auto-fit-height-32-regular",
	});
}

export default Component;
