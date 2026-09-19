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
		"content": `<style>.cm6odys2u {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-.983 36.883v21.092a28 28 0 0 1-2.95-.256V35.933h31.652a28 28 0 0 1-.577 2.95zm-26.154.023a28 28 0 0 1-.582-2.974H20.2v21.451a28 28 0 0 1-2.95-1.599V38.906zm12.387-13.79V8.215a28 28 0 0 1 2.95-1.599v21.45H4.281q.211-1.503.577-2.95zm10.816 2.95V4.282a28 28 0 0 1 2.95-.257v21.091h28.125q.367 1.447.577 2.95z");
}
</style><path class="cm6odys2u"/>`,
		"fallback": "emojione-monotone:flag-for-bouvet-island",
	});
}

export default Component;
