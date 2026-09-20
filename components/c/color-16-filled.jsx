import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vjg44ib1o {
  fill: currentColor;
  d: path("M2 8a6 6 0 1 1 12 0c0 1.58-.328 3.05-.983 4.146C12.354 13.254 11.334 14 10 14a3 3 0 0 1-3-3v-1a1 1 0 0 0-1-1c-.28 0-.402.109-.646.354l-.014.013C5.085 9.622 4.708 10 4 10a2 2 0 0 1-2-2m5.5-2.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2.5 0a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M11.5 7a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M11 9.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-.5 1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0");
}
</style><path class="vjg44ib1o"/>`,
		"fallback": "fluent:color-16-filled",
	});
}

export default Component;
