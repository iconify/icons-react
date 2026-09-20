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
		"content": `<style>.c5o6o4uad {
  fill: currentColor;
  d: path("M12.025 2q2.025 0 3.163 1.525T17.125 7q.65 1.575 1.25 3.5t1.275 3.875q.65 1.875 1.425 3.525t1.8 2.825q.2.225.175.525t-.225.525t-.475.25t-.55-.175q-1.975-1.55-3.25-3.463t-2.575-3.337q-.85-.95-1.812-1.5T12.025 13t-2.137.55t-1.813 1.5q-1.3 1.425-2.575 3.338T2.25 21.85q-.275.2-.55.175t-.475-.25T1 21.25t.175-.525Q2.2 19.55 2.975 17.9T4.4 14.375q.675-1.95 1.275-3.875T6.925 7q.8-1.95 1.938-3.475T12.025 2");
}
</style><path class="c5o6o4uad"/>`,
		"fallback": "material-symbols:antigravity-rounded",
	});
}

export default Component;
