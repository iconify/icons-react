import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c3jb06qfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 16.25l5.75-5.75a4.5 4.5 0 0 1 6-6l-4 4a1.5 1.5 0 0 0 2 2l4-4a4.5 4.5 0 0 1-6 6l-5.75 5.75a1.5 1.5 0 0 1-2-2m12.33-.698l-1.757 2.007a.567.567 0 0 0 .427.941a.9.9 0 0 1 .855 1.186L17.5 20a.322.322 0 0 0 .546.314l1.96-2.22a.508.508 0 0 0-.381-.844a.94.94 0 0 1-.924-1.107l.049-.268a.386.386 0 0 0-.67-.323");
}
</style><path class="c3jb06qfk"/>`,
		"fallback": "uix:hotfix",
	});
}

export default Component;
