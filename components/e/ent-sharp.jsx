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
		"content": `<style>.k2uyttbdk {
  fill: currentColor;
  d: path("M6 22v-4.3q-1.425-1.3-2.212-3.037T3 11q0-3.75 2.625-6.375T12 2q3.125 0 5.538 1.838t3.137 4.787l1.6 6.375H19v5h-4v2h-3.9l.625-6H15v-2h-3.075l.225-2H17v-2h-6.675L9.1 22z");
}
</style><path class="k2uyttbdk"/>`,
		"fallback": "material-symbols:ent-sharp",
	});
}

export default Component;
