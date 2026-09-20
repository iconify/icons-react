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
		"content": `<style>.tns_s8ujm {
  fill: currentColor;
  d: path("M4.209 10.733a.75.75 0 0 0 1.086 1.034l5.954-6.251V20.25a.75.75 0 0 0 1.5 0V5.516l5.955 6.251a.75.75 0 0 0 1.087-1.034l-7.067-7.42a1 1 0 0 0-.58-.3a.8.8 0 0 0-.29.001a1 1 0 0 0-.578.3z");
}
</style><path class="tns_s8ujm"/>`,
		"fallback": "fluent:arrow-up-24-regular",
	});
}

export default Component;
