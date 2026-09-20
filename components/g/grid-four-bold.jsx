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
		"content": `<style>.jhfnm669a {
  fill: currentColor;
  d: path("M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 80h-56V60h56Zm-80-56v56H60V60Zm-56 80h56v56H60Zm80 56v-56h56v56Z");
}
</style><path class="jhfnm669a"/>`,
		"fallback": "ph:grid-four-bold",
	});
}

export default Component;
