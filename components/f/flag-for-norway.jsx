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
		"content": `<style>.vqe4b5hpf {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-.983 36.883v21.092a28 28 0 0 1-2.95-.256V35.934h31.652a28 28 0 0 1-.577 2.949zm-26.154.023a28 28 0 0 1-.582-2.973H20.2v21.45a28 28 0 0 1-2.95-1.599V38.906zm12.387-13.79V8.215a28 28 0 0 1 2.95-1.599v21.45H4.281q.212-1.503.577-2.95zm10.816 2.95V4.281a28 28 0 0 1 2.95-.256v21.091h28.125q.366 1.447.577 2.95z");
}
</style><path class="vqe4b5hpf"/>`,
		"fallback": "emojione-monotone:flag-for-norway",
	});
}

export default Component;
