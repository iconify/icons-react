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
		"content": `<style>.afk_0jaxp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.75 4.999q-.001-1.346.951-2.298q.952-.953 2.299-.953t2.299.953t.951 2.298q.001 1.347-.951 2.3T18 8.252q-.934 0-1.678-.458l-3.572 3.993v4.012q2.5.351 2.5 3.201q0 3.25-3.25 3.25T8.75 19q0-2.85 2.5-3.201v-4.012L7.776 7.904Q7.061 8.25 6 8.25Q2.75 8.25 2.75 5T6 1.75T9.25 5q0 1.128-.391 1.864L12 10.375l3.249-3.631q-.499-.768-.499-1.743z");
}
</style><path class="afk_0jaxp"/>`,
		"fallback": "uix-solid:git-fork",
	});
}

export default Component;
