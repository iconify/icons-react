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
		"content": `<style>.wvn62xhah {
  fill: currentColor;
  d: path("M11.5 15V9H13v6zM6 15q-.45 0-.725-.312T5 14v-4q0-.375.275-.687T6 9h3q.45 0 .725.313T10 10v.5H6.5v3h2V12H10v2q0 .375-.275.688T9 15zm8.5 0V9H19v1.5h-3v1h2V13h-2v2z");
}
</style><path class="wvn62xhah"/>`,
		"fallback": "material-symbols:gif-outline",
	});
}

export default Component;
