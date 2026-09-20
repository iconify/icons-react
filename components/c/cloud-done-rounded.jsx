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
		"content": `<style>.hy0nk5u2z {
  fill: currentColor;
  d: path("m10.325 14.125l-1.4-1.4q-.3-.3-.7-.3t-.7.3t-.3.713t.3.712L9.65 16.3q.3.3.7.3t.7-.3l4.225-4.225q.3-.3.3-.725t-.3-.725t-.725-.3t-.725.3zM6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20z");
}
</style><path class="hy0nk5u2z"/>`,
		"fallback": "material-symbols:cloud-done-rounded",
	});
}

export default Component;
