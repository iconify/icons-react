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
		"content": `<style>.hdpuqpbhy {
  fill: currentColor;
  d: path("M7.8 16h1.6l.8-2.3h3.65l.8 2.3h1.55l-3.4-9h-1.6zm2.85-3.6l1.3-3.75h.1l1.3 3.75zM12 23.3L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z");
}
</style><path class="hdpuqpbhy"/>`,
		"fallback": "material-symbols:brightness-auto-sharp",
	});
}

export default Component;
