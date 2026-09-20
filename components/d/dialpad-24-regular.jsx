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
		"content": `<style>.ag3dq1bii {
  fill: currentColor;
  d: path("M12 17.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m0-5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.996 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-9.992 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.996-5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.996 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-9.992 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.996-5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m4.996 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-9.992 0a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5");
}
</style><path class="ag3dq1bii"/>`,
		"fallback": "fluent:dialpad-24-regular",
	});
}

export default Component;
