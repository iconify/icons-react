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
		"content": `<style>.nb38wbbdj {
  fill: var(--svg-color--333, #333);
  d: path("M12 12h40v40H12z");
}
</style><path class="nb38wbbdj"/>`,
		"fallback": "emojione:black-medium-small-square",
	});
}

export default Component;
