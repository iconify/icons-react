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
		"content": `<style>.rqrj2zbtn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M23 12C23 17.937 17.937 23 12 23C6.063 23 1 17.937 1 12C1 6.063 6.063 1 12 1C17.937 1 23 6.063 23 12ZM10 7L10 17L8 17L8 7L10 7ZM16 7L16 17L14 17L14 7L16 7Z");
}
</style><path clip-rule="evenodd" class="rqrj2zbtn"/>`,
		"fallback": "keyline-icons:circle-pause-sharp-fill",
	});
}

export default Component;
