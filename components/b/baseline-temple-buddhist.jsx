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
		"content": `<style>.cag40dbha {
  fill: currentColor;
  d: path("M12 1L8.25 6h7.5z");
}

.ogfespbiu {
  fill: currentColor;
  d: path("M6 8.86V10h12V8.86c.55-.14 3-1.04 3-3.86l-2 .02C19 6.11 18.11 7 17.02 7H6.98C5.89 7 5 6.11 5 5.02H3c0 1.85 1.28 3.4 3 3.84");
}

.tb4qkmbuo {
  fill: currentColor;
  d: path("M21 9.02c0 1.09-.89 1.98-1.98 1.98H4.98C3.89 11 3 10.11 3 9.02H1c0 1.86 1.28 3.4 3 3.84V22h6v-3c0-1.1.9-2 2-2s2 .9 2 2v3h6v-9.14c.55-.14 3-1.04 3-3.86z");
}
</style><path class="tb4qkmbuo"/><path class="ogfespbiu"/><path class="cag40dbha"/>`,
		"fallback": "ic:baseline-temple-buddhist",
	});
}

export default Component;
