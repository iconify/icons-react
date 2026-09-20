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
		"content": `<style>.l83f5-b4x {
  fill: var(--svg-color--green, green);
  d: path("M4.178 4.956h17.37v6.45H4.178zm7.145 8.538h17.37v6.45h-17.37zm10.334 8.539h7.036v6.45h-7.036z");
}
</style><path class="l83f5-b4x"/>`,
		"fallback": "vscode-icons:file-type-pddl-plan",
	});
}

export default Component;
