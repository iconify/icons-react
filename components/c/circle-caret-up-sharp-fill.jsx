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
		"content": `<style>.jrljmcked {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM11.1258 6.5144L6.1258 15.5144C5.7555 16.1809 6.2375 17 7 17L17 17C17.7625 17 18.2445 16.1809 17.8742 15.5144L12.8742 6.5144C12.4932 5.8285 11.5068 5.8285 11.1258 6.5144Z");
}
</style><path clip-rule="evenodd" class="jrljmcked"/>`,
		"fallback": "keyline-icons:circle-caret-up-sharp-fill",
	});
}

export default Component;
