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

.lao5rcc4x {
  d: path("M19 15.818l2 2V6a1 1 0 0 0-2 0v9.82z");
  fill: currentColor;
}

.shh2v_b3q {
  d: path("M15 11.818l2 2V8.995A.998.998 0 0 0 16 8c-.552 0-1 .446-1 .995v2.823z");
  fill: currentColor;
}

.whx4x5jrt {
  d: path("M8 14c.552 0 1 .445 1 .994v4.012A.997.997 0 0 1 8 20c-.552 0-1-.445-1-.994v-4.012c0-.549.448-.994 1-.994z");
  fill: currentColor;
}

.yrnuzy-av {
  d: path("M4 17c.552 0 1 .44 1 .984v1.032A.992.992 0 0 1 4 20c-.552 0-1-.44-1-.984v-1.032A.992.992 0 0 1 4 17z");
  fill: currentColor;
}

.zxlazh99x {
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06L11 12.06V19a1 1 0 1 0 2 0v-4.94l2 2v2.945c0 .55.448.995 1 .995s1-.446 1-.995v-.944l3.72 3.72a.75.75 0 0 0 1.06-1.061L3.28 2.22z");
  fill: currentColor;
}
</style><g class="ft5dv1b6b"><path class="zxlazh99x"/><path class="lao5rcc4x"/><path class="shh2v_b3q"/><path class="whx4x5jrt"/><path class="yrnuzy-av"/></g>`,
		"fallback": "fluent:cellular-data-off-24-filled",
	});
}

export default Component;
