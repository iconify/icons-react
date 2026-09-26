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
		"content": `<style>.ahhqo1b4s {
  d: path("M1.7071 1.7071L22.2929 22.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xfkccq6zj {
  fill: currentColor;
  d: path("M16 23L4 23C3.4477 23 3 22.5523 3 22L3 3L21 21L21 22C21 22.5523 20.5523 23 20 23ZM6.5 1L14 1C14.2652 1 14.5195 1.1054 14.707 1.293L20.7071 7.2929C20.8946 7.4805 21 7.7348 21 8L21 15.3431L19 15.3431L6.5 3L6.5 1ZM14 8L18.5858 8L14 3.4142L14 8Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="xfkccq6zj"/><path class="ahhqo1b4s"/></g>`,
		"fallback": "keyline-icons:file-off-sharp-fill",
	});
}

export default Component;
