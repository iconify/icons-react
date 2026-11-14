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
		"content": `<style>.nj7et4blf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.25 2Q16.5 2 16.5 4.75q0 .845.259 1.43l-2.745 2.745Q13.22 8.5 12 8.5q-3.5 0-3.5 3.5q0 1.22.425 2.014L6.18 16.759q-.585-.259-1.43-.259Q2 16.5 2 19.25T4.75 22t2.75-2.75q0-.845-.259-1.43l2.745-2.745q.794.425 2.014.425q3.5 0 3.5-3.5q0-1.22-.425-2.014l2.745-2.745q.585.259 1.43.259Q22 7.5 22 4.75T19.25 2");
}
</style><path class="nj7et4blf"/>`,
		"fallback": "uix-solid:fewest-changes",
	});
}

export default Component;
