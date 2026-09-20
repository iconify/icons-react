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
		"content": `<style>.voun58btt {
  fill: currentColor;
  d: path("M19.79 13.267a.75.75 0 0 0-1.086-1.034l-5.954 6.251V3.75a.75.75 0 1 0-1.5 0v14.734l-5.955-6.251a.75.75 0 1 0-1.086 1.034l7.067 7.42c.16.168.366.268.58.3a.8.8 0 0 0 .29-.001a1 1 0 0 0 .578-.3z");
}
</style><path class="voun58btt"/>`,
		"fallback": "fluent:arrow-down-24-regular",
	});
}

export default Component;
