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
		"content": `<style>.x8id3xbjo {
  fill: var(--svg-color--137a08, #137a08);
  d: path("M64 43c0 6.075-3.373 11-10 11H10C3.373 54 0 49.075 0 43V21c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11z");
}

.yvr7uwblv {
  cx: 22.942px;
  cy: 31.829px;
  r: 12.641px;
  fill: var(--svg-color--c32129, #c32129);
}
</style><path class="x8id3xbjo"/><circle class="yvr7uwblv"/>`,
		"fallback": "emojione-v1:flag-for-bangladesh",
	});
}

export default Component;
