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
		"content": `<style>.gb101z17z {
  fill: currentColor;
  d: path("M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h4l4-4l4 4h4q.825 0 1.413.588T22 6v14q0 .825-.587 1.413T20 22zm0-2h16V6H4zm2-2V8h12v10zm2-2h8v-6H8zm4-3");
}
</style><path class="gb101z17z"/>`,
		"fallback": "material-symbols:filter-frames-outline",
	});
}

export default Component;
