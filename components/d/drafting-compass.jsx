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
		"content": `<style>.c1sq6mn3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2L12 4M11.1984 7.8323L5 22M12.8016 7.8323L19 22M14 6C14 7.1046 13.1046 8 12 8C10.8954 8 10 7.1046 10 6C10 4.8954 10.8954 4 12 4C13.1046 4 14 4.8954 14 6ZM21 13.9373C18.722 16.5203 15.444 18 12 18C8.556 18 5.278 16.5203 3 13.9373");
}
</style><path class="c1sq6mn3r"/>`,
		"fallback": "keyline-icons:drafting-compass",
	});
}

export default Component;
