import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fp9mskdgf {
  fill: currentColor;
  d: path("M9 14c.06 0-.06.002 0 0c.023.002.227 0 .25 0h4.393l-2.268 2.268a.75.75 0 1 0 1.061 1.06l3.353-3.352a.75.75 0 0 0 .212-.639a.75.75 0 0 0-.215-.444L12.54 9.647a.75.75 0 1 0-1.06 1.061l1.79 1.792H9a3.5 3.5 0 1 1 0-7h4.25a.75.75 0 0 0 0-1.5H9a5 5 0 0 0 0 10");
}
</style><path class="fp9mskdgf"/>`,
		"fallback": "fluent:arrow-hook-down-right-20-filled",
	});
}

export default Component;
