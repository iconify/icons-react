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
		"content": `<style>.kyo7sjmmx {
  fill: currentColor;
  d: path("M4 14v-2h5v-2H4V8h5V6H4V4h7v10zm9 0V4h7v10zm2-2h3V6h-3zM3 22v-5h2v5zm4 0v-5h2v5zm4 0v-5h2v5zm4 0v-5h6v5z");
}
</style><path class="kyo7sjmmx"/>`,
		"fallback": "material-symbols:30fps-select-outline-sharp",
	});
}

export default Component;
