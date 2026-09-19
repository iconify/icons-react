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
		"content": `<style>.nu3b38b0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.506 15.78l-1.63-1.63a4.94 4.94 0 1 0-6.988 6.988l1.63 1.63m3.494-3.493l-1.63-1.63m1.63 15.605l15.606-15.606M13.52 29.756L29.124 14.15a4.94 4.94 0 1 1 6.988 6.987L20.507 36.744");
}

.ul1uotb5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 12.287l-1.63-1.63c-3.86-3.86-10.116-3.86-13.975 0s-3.86 10.115 0 13.974l1.63 1.63l15.598-15.597c3.866-3.866 10.123-3.866 13.982-.007s3.86 10.116 0 13.975L24 40.238");
}
</style><path class="ul1uotb5s"/><path class="nu3b38b0k"/>`,
		"fallback": "arcticons:china-medical-mobile",
	});
}

export default Component;
