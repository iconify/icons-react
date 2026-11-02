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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.mehks01rk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 8h4c1.395 0 2.651 1.256 3 3l1 5c.414 2.07-1.034 4-3 4H7c-1.966 0-3.414-1.93-3-4l1-5c.349-1.744 1.604-3 3-3zM8 8a4 4 0 1 1 8 0");
}

.t2u6d7biz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 7c.491 0 .976.108 1.422.313c1.384.628 2.267 2.036 2.559 3.491l1 5a4.5 4.5 0 0 1-.024 1.918C20.529 19.585 18.947 21 17 21H7c-1.947 0-3.529-1.415-3.957-3.278a4.5 4.5 0 0 1-.024-1.918l1-5c.292-1.455 1.175-2.863 2.559-3.491A3.4 3.4 0 0 1 8 7Z");
}
</style><g class="ft5dv1b6b"><path class="t2u6d7biz"/><path class="mehks01rk"/></g>`,
		"fallback": "coolicons:handbag-duotone-round",
	});
}

export default Component;
