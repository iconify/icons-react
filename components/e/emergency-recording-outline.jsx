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
		"content": `<style>.n-v14fe6y {
  fill: currentColor;
  d: path("M9 17h2v-3.275l3 1.725l1-1.725L12 12l3-1.725l-1-1.725l-3 1.725V7H9v3.275L6 8.55l-1 1.725L8 12l-3 1.725l1 1.725l3-1.725zm-5 3q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20zm0-2h12V6H4zm0 0V6z");
}
</style><path class="n-v14fe6y"/>`,
		"fallback": "material-symbols:emergency-recording-outline",
	});
}

export default Component;
