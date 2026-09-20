import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aa3nkpbzl {
  fill: currentColor;
  d: path("M128 36h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4Zm68-172h-24a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4ZM68 128a4 4 0 0 1-4 4H44v20a4 4 0 0 1-8 0v-20H16a4 4 0 0 1 0-8h20v-20a4 4 0 0 1 8 0v20h20a4 4 0 0 1 4 4");
}
</style><path class="aa3nkpbzl"/>`,
		"fallback": "ph:columns-plus-left-thin",
	});
}

export default Component;
