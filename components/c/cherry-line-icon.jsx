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
		"content": `<style>.v9j2stj3l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.739 23.023C32.762 15.722 26.92 9.881 20.103 6.96c2.437 6.818 1.46 12.66-2.921 16.883");
}

.xpkpec7on {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.262 23.517a8.756 8.756 0 0 1 8.761 8.761c0 4.833-3.918 8.762-8.761 8.762c-4.833 0-8.762-3.93-8.762-8.762c0-4.843 3.929-8.761 8.762-8.761m19.477 0c4.832 0 8.761 3.918 8.761 8.761c0 4.833-3.929 8.762-8.761 8.762c-4.843 0-8.762-3.93-8.762-8.762a8.756 8.756 0 0 1 8.762-8.761");
}
</style><path class="xpkpec7on"/><path class="v9j2stj3l"/>`,
		"fallback": "arcticons:cherry-line-icon",
	});
}

export default Component;
