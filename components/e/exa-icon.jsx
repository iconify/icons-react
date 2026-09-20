import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":311};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ut9fa-bfz {
  fill: var(--svg-color--0143d9, #0143d9);
  d: path("M256 22.39a2.78 2.78 0 0 1-.63 1.76L148.04 155.163l107.329 131.01c.406.496.63 1.12.63 1.76v19.61a2.79 2.79 0 0 1-2.795 2.783H2.795A2.79 2.79 0 0 1 0 307.543V2.783A2.79 2.79 0 0 1 2.795 0h250.41A2.79 2.79 0 0 1 256 2.783zM45.795 279.972h165.16L128.372 179.17zm-15.316-29.325l66.09-80.669h-66.09zm0-111.022h65.497l-65.497-79.95zm97.893-8.472l82.583-100.8H45.795z");
}
</style><path class="ut9fa-bfz"/>`,
		"fallback": "logos:exa-icon",
	});
}

export default Component;
