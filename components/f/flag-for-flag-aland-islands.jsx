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
		"content": `<style>.wr5a4e_jw {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-.983 36.884v21.091a28 28 0 0 1-2.95-.256V35.934h31.652a28 28 0 0 1-.577 2.95zm-26.154.022a28 28 0 0 1-.582-2.973H20.2v21.45a28 28 0 0 1-2.95-1.599V38.906zM17.25 25.117V8.215a28 28 0 0 1 2.95-1.599v21.45H4.281q.211-1.502.577-2.949zm10.816 2.949V4.281a28 28 0 0 1 2.95-.256v21.092h28.125q.367 1.448.577 2.949z");
}
</style><path class="wr5a4e_jw"/>`,
		"fallback": "emojione-monotone:flag-for-flag-aland-islands",
	});
}

export default Component;
