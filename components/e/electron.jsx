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
		"content": `<style>.j673whb3d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.596 16.884q1.016 2.436 4.579 2.506q3.352.066 6.97-2.035t5.207-5.037q.674-1.245.819-2.323Q22.5 9.412 22.5 7.5q0-2.75-2.75-2.75q-.892 0-1.495.289q-1.014-.401-2.43-.429q-3.352-.066-6.97 2.035t-5.207 5.037q-1.691 3.124-.052 5.202");
}
</style><path class="j673whb3d"/>`,
		"fallback": "uix-solid:electron",
	});
}

export default Component;
