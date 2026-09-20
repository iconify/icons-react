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
		"content": `<style>.x1hwa0bof {
  fill: currentColor;
  d: path("M12 21.385v-1h7V19h-3.077v-6.154H19V11q0-2.9-2.05-4.95T12 4T7.05 6.05T5 11v1.846h3.077V19H4v-8.007q0-1.647.626-3.104q.626-1.456 1.716-2.547q1.09-1.09 2.546-1.716T12 3t3.113.626t2.545 1.716t1.716 2.55T20 11v10.385z");
}
</style><path class="x1hwa0bof"/>`,
		"fallback": "material-symbols-light:headset-mic-sharp",
	});
}

export default Component;
