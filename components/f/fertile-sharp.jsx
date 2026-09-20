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
		"content": `<style>.bf9kxnbyn {
  fill: currentColor;
  d: path("M8.1 21.213q-1.825-.788-3.175-2.138T2.788 15.9T2 12V2.5l6.025 4.525Q8.8 5.85 9.788 4.6T12 2q1.125 1.25 2.15 2.538t1.8 2.487L22 2.5V12q0 2.075-.788 3.9t-2.137 3.175t-3.175 2.138T12 22t-3.9-.788");
}
</style><path class="bf9kxnbyn"/>`,
		"fallback": "material-symbols:fertile-sharp",
	});
}

export default Component;
