import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ms2lb6u_u {
  fill: currentColor;
  d: path("M20.421 16.39a1 1 0 0 1-1.842 0l-5.5-13a1 1 0 0 1 1.842-.78l4.58 10.824L24.078 2.61a1 1 0 0 1 1.842.779zM8.501 2a1 1 0 0 1 .92.61l5.5 13a1 1 0 1 1-1.842.78l-1.433-3.387H5.354L3.921 16.39a1 1 0 0 1-1.842-.78l5.5-13A1 1 0 0 1 8.5 2m-2.3 9.003h4.6L8.5 5.567zm15.031 8.357a1 1 0 0 1 1.409-.128l3 2.5a1 1 0 0 1 0 1.537l-3 2.5a1 1 0 0 1-1.28-1.537l.877-.732H5.762l.878.732a1 1 0 0 1-1.28 1.537l-3-2.5a1 1 0 0 1 0-1.537l3-2.5a1 1 0 0 1 1.28 1.537l-.878.731h16.476l-.878-.732a1 1 0 0 1-.128-1.408");
}
</style><path class="ms2lb6u_u"/>`,
		"fallback": "fluent:font-space-tracking-out-28-filled",
	});
}

export default Component;
