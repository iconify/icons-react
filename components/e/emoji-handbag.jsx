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
		"content": `<style>.trr4__war {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.038 42.5H5.962l1.443-23.418h33.19z");
}

.vsz4n-_3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.391 19.082c.163-8.564 1.27-13.582 8.612-13.582s8.395 5.37 8.45 13.581M42.038 42.5H5.962l1.443-23.418h33.19z");
}

.x8rkp3b1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.866 21.566h6.645v6.645h-6.645zm15.101 0h6.646v6.645h-6.646z");
}
</style><path class="vsz4n-_3c"/><path class="trr4__war"/><path class="x8rkp3b1q"/>`,
		"fallback": "arcticons:emoji-handbag",
	});
}

export default Component;
