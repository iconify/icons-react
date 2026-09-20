import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gnyyp6ymq {
  fill: currentColor;
  d: path("M3.26 11.602C3.942 8.327 6.793 6 10 6s6.057 2.327 6.74 5.602a.5.5 0 0 0 .98-.204C16.943 7.673 13.693 5 10 5s-6.943 2.673-7.72 6.398a.5.5 0 0 0 .98.204M9.99 8a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7");
}
</style><path class="gnyyp6ymq"/>`,
		"fallback": "fluent:eye-20-filled",
	});
}

export default Component;
