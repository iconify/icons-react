import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n67dsdb3y {
  fill: var(--svg-color--4d5357, #4d5357);
  d: path("m39.5 61.1l-6.4-8.7h-.8c-5.6 0-10.2-3.6-10.2-8V25h8l-14-19.2L2 25h8v19.4c0 4.7 2.3 9.1 6.6 12.4c4.2 3.3 9.8 5.2 15.8 5.2c2.4 0 4.8-.3 7.1-.9m-7.8-49.5c5.6 0 10.2 3.6 10.2 8v19.5h-8L48 58.3l14-19.2h-8V19.6c0-4.7-2.3-9.1-6.5-12.4C43.3 3.8 37.7 2 31.7 2q-3.75 0-7.2.9l6.4 8.7z");
}
</style><path class="n67dsdb3y"/>`,
		"fallback": "emojione:clockwise-vertical-arrows",
	});
}

export default Component;
