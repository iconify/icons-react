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
		"content": `<style>.g1b6u2bgo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM11 5L11 11.4227L6.6699 13.9227L7.6699 15.6547L12.5 12.866C12.8094 12.6874 13 12.3573 13 12L13 5L11 5Z");
}
</style><path clip-rule="evenodd" class="g1b6u2bgo"/>`,
		"fallback": "keyline-icons:clock-8-sharp-fill",
	});
}

export default Component;
