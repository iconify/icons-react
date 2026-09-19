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
		"content": `<style>.bdo7nm0hx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.483 4.5v7.465h3.805v20.911h-3.805v7.465H8.697V4.5Z");
}

.psyf6_b8t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.657 12.039h11.064v20.762H16.657z");
}

.q4r95ccqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.803 7.66h2.695v4.552m.88 2.912h2.925v20.911h-3.805V43.5H11.712v-2.85");
}

.ulau59bpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.672 15.644v17.157h8.048V15.644Z");
}
</style><path class="q4r95ccqq"/><path class="bdo7nm0hx"/><path class="ulau59bpz"/><path class="psyf6_b8t"/>`,
		"fallback": "arcticons:deedum",
	});
}

export default Component;
