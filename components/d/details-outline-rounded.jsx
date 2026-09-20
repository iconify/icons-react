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
		"content": `<style>.huqp4-bek {
  fill: currentColor;
  d: path("M5.066 20q-.46 0-.69-.401t-.012-.805l6.934-12.469q.218-.423.702-.423t.702.423l6.935 12.47q.217.403-.013.804t-.69.401zm.334-1h6.1V8.021zm7.1 0h6.1L12.5 8.021z");
}
</style><path class="huqp4-bek"/>`,
		"fallback": "material-symbols-light:details-outline-rounded",
	});
}

export default Component;
