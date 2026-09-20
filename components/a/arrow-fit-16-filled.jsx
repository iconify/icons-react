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
		"content": `<style>.p0bi2e9uf {
  fill: currentColor;
  d: path("M4.28 5.22a.75.75 0 0 1 0 1.06L3.56 7h2.69a.75.75 0 0 1 0 1.5H3.56l.72.72a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06l2-2a.75.75 0 0 1 1.06 0m7.44 0a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 1 1-1.06-1.06l.72-.72H9.75a.75.75 0 0 1 0-1.5h2.69l-.72-.72a.75.75 0 0 1 0-1.06");
}
</style><path class="p0bi2e9uf"/>`,
		"fallback": "fluent:arrow-fit-16-filled",
	});
}

export default Component;
