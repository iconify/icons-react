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
		"content": `<style>.iwj627bah {
  fill: currentColor;
  d: path("M11.5 20v-4h1v4zm7.575-2.948l-2.838-2.813l.713-.714l2.814 2.839zm-14.15 0l-.689-.688l2.814-2.839l.714.714zM5 5v1.77h14V5zm2.523 2.77l.646 1.769h7.662l.646-1.77zm-.092 2.769l-.97-2.77H4V4h16v3.77h-2.461l-1.074 2.769zM5 5v1.77z");
}
</style><path class="iwj627bah"/>`,
		"fallback": "material-symbols-light:detector-alarm-outline-sharp",
	});
}

export default Component;
