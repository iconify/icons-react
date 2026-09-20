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
		"content": `<style>.mszg0pbkk {
  fill: currentColor;
  d: path("M19.5 3.5a1 1 0 0 1 1 1V12a1 1 0 1 1-2 0V6.914L6.914 18.5H12a1 1 0 1 1 0 2H4.5a1 1 0 0 1-1-1V12a1 1 0 1 1 2 0v5.086L17.086 5.5H12a1 1 0 1 1 0-2z");
}
</style><path class="mszg0pbkk"/>`,
		"fallback": "fluent:arrow-maximize-24-filled",
	});
}

export default Component;
