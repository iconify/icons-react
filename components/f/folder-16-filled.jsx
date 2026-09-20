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
		"content": `<style>.cic1voiak {
  fill: currentColor;
  d: path("M1 4.5A2.5 2.5 0 0 1 3.5 2h2.086a1.5 1.5 0 0 1 1.06.44L8 3.792l-2.06 2.06A.5.5 0 0 1 5.585 6H1zM1 7v4.5A2.5 2.5 0 0 0 3.5 14h9a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 4H9.207l-2.56 2.56A1.5 1.5 0 0 1 5.585 7z");
}
</style><path class="cic1voiak"/>`,
		"fallback": "fluent:folder-16-filled",
	});
}

export default Component;
