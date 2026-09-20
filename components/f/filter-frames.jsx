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
		"content": `<style>.al9rxtcrk {
  fill: currentColor;
  d: path("M4 22q-.825 0-1.412-.587T2 20V6q0-.825.588-1.412T4 4h4l4-4l4 4h4q.825 0 1.413.588T22 6v14q0 .825-.587 1.413T20 22zm0-2h16V6H4zm2-2V8h12v10z");
}
</style><path class="al9rxtcrk"/>`,
		"fallback": "material-symbols:filter-frames",
	});
}

export default Component;
