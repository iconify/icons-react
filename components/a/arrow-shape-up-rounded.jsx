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
		"content": `<style>.ynttzcbuu {
  fill: currentColor;
  d: path("M8.539 19.192v-5H5.325q-.379 0-.55-.348t.09-.646L11.399 5.7q.243-.279.602-.279t.602.279l6.533 7.498q.261.298.09.646t-.55.348h-3.213v5q0 .349-.23.578t-.578.23H9.346q-.348 0-.578-.23t-.23-.578");
}
</style><path class="ynttzcbuu"/>`,
		"fallback": "material-symbols-light:arrow-shape-up-rounded",
	});
}

export default Component;
