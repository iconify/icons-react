import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y0pa7wbmq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.908 6.766l4.777 10.324a1 1 0 0 0 .788.573l11.295 1.353a1 1 0 0 1 .561 1.726l-8.343 7.734a1 1 0 0 0-.3.927l2.203 11.16a1 1 0 0 1-1.468 1.067l-9.934-5.544a1 1 0 0 0-.974 0l-9.934 5.544a1 1 0 0 1-1.468-1.067l2.204-11.16a1 1 0 0 0-.302-.927l-8.342-7.734a1 1 0 0 1 .56-1.726l11.296-1.353a1 1 0 0 0 .788-.573l4.777-10.324a1 1 0 0 1 1.815 0ZM20.72 21.117v4.458m0-4.458v4.458m6.56-4.458v4.458");
}
</style><path class="y0pa7wbmq"/>`,
		"fallback": "arcticons:gizmo",
	});
}

export default Component;
