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
		"content": `<style>.ya8fkybqc {
  fill: currentColor;
  d: path("M3 12v5q0 1.65 1.175 2.825T7 21h10q1.65 0 2.825-1.175T21 17v-5h-4v4H7v-4zm6 0v2h6v-2zm-6-2h18V7q0-1.65-1.175-2.825T17 3H7Q5.35 3 4.175 4.175T3 7z");
}
</style><path class="ya8fkybqc"/>`,
		"fallback": "material-symbols:earbud-case-sharp",
	});
}

export default Component;
