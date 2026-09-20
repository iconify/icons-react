import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gl7f-yb6k {
  fill: currentColor;
  d: path("M8 5.5a1.997 1.997 0 0 0-2 2a2 2 0 0 0 2 2h4.44l-.22-.22a.75.75 0 0 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H8a3.5 3.5 0 0 1-3.046-5.225A3.5 3.5 0 0 1 11.5 7.5v.025c-.27.276-.431.62-.482.975H9.732A2 2 0 0 0 8 5.5m-5.25 4h1.218c.29.583.702 1.094 1.203 1.5H2.75a.75.75 0 0 1 0-1.5");
}
</style><path class="gl7f-yb6k"/>`,
		"fallback": "fluent:arrow-sprint-16-filled",
	});
}

export default Component;
