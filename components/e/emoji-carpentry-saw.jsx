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
		"content": `<style>.b4pxh08kq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.027 30.528L16.612 5.5L12.64 7.85l-1.055 1.957l2.154.55l-1.055 1.956l2.154.55l-1.055 1.956l2.154.55l-1.055 1.956l2.154.549l-1.056 1.957l2.154.549l-1.055 1.957l2.154.549l-1.055 1.957l2.154.549l-1.055 1.957l2.154.55l-1.055 1.956l2.154.549l-1.055 1.957l2.154.549l-1.055 1.957l1.369 1.634");
}

.klmh5xbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.942 36.501l3.164-4.957c.22-.345.58-.575.986-.628l3.797-.501a1.32 1.32 0 0 1 1.307.635l3.124 5.284a.687.687 0 0 1-.241.941l-.414.245a.687.687 0 0 1-.94-.242l-.347-.585l-6.64 3.929l.346.585a.687.687 0 0 1-.242.94l-.433.257a.687.687 0 0 1-.941-.241l-2.549-4.31a1.29 1.29 0 0 1 .023-1.352");
}

.olfsqpegg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.092 34.513l-.665-1.123l-6.076 3.594l.665 1.124");
}
</style><path class="b4pxh08kq"/><path class="klmh5xbek"/><path class="olfsqpegg"/>`,
		"fallback": "arcticons:emoji-carpentry-saw",
	});
}

export default Component;
