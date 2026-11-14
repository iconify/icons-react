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
		"content": `<style>.dzoz9qb3d {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.935 9.143L9.81 4.132q2.19-1.866 4.38 0l5.875 5.011q1.185 1.011 1.185 2.568v2.161Q19.857 12.75 18 12.75q-2.175 0-3.712 1.538Q12.75 15.825 12.75 18q0 1.857 1.122 3.25H6.125q-3.375 0-3.375-3.375v-6.164q0-1.557 1.185-2.568M18 14q-4 0-4 4t4 4t4-4t-4-4m-2.5 4q0 2.092 1.75 2.433v-4.866Q15.5 15.908 15.5 18m5 0q0 2.092-1.75 2.433v-4.866q1.75.341 1.75 2.433");
}
</style><path class="dzoz9qb3d"/>`,
		"fallback": "uix-solid:home-mode",
	});
}

export default Component;
