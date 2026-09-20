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
		"content": `<style>.et0wqksoz {
  fill: currentColor;
  d: path("M3.5 20.5v-5h1v4h4v1zm12 0v-1h4v-4h1v5zm-8.325-5.386l-.713-.689L8.387 12.5H2.5v-1h5.887L6.462 9.575l.713-.688L10.289 12zm9.65 0L13.712 12l3.113-3.113l.713.688l-1.925 1.925H21.5v1h-5.886l1.924 1.925zM3.5 8.5v-5h5v1h-4v4zm16 0v-4h-4v-1h5v5z");
}
</style><path class="et0wqksoz"/>`,
		"fallback": "material-symbols-light:cell-merge-outline",
	});
}

export default Component;
