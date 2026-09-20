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
		"content": `<style>.s68daibby {
  fill: none;
  stroke: var(--svg-color--dedede, #dedede);
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-7px, 1.7px);
  d: path("m4.4 15l11-11c1.5-1.5 4-1.5 5.5 0v0c1.5 1.5 1.5 4 0 5.5l-8.3 8.3m0 0l8.3-8.3c1.5-1.5 4-1.5 5.5 0l.057.057c1.5 1.5 1.5 4 0 5.5l-10 10c-.51.51-.51 1.3 0 1.8l2 2m-.4-22l-8.1 8.1c-1.5 1.5-1.5 4 0 5.5v0c1.5 1.5 4 1.5 5.5 0l8.1-8.1");
}
</style><path class="s68daibby"/>`,
		"fallback": "vscode-icons:file-type-mcp",
	});
}

export default Component;
