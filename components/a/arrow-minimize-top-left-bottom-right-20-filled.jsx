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
		"content": `<style>.vidcsf1jd {
  fill: currentColor;
  d: path("m16.25 11l.102.007a.75.75 0 0 1 .648.743l-.007.102a.75.75 0 0 1-.743.648h-2.688l4.469 4.47l.072.084a.75.75 0 0 1-1.133.976l-4.47-4.47v2.69l-.007.102A.75.75 0 0 1 11 16.25v-4.5l.007-.101A.75.75 0 0 1 11.75 11zM1.97 1.97a.75.75 0 0 1 1.06 0L8 6.938V3.75l.007-.101A.75.75 0 0 1 9.5 3.75v5l-.007.102a.75.75 0 0 1-.743.648h-5l-.101-.007A.75.75 0 0 1 3 8.75l.007-.101A.75.75 0 0 1 3.75 8h3.19L1.97 3.03l-.073-.084a.75.75 0 0 1 .073-.976");
}
</style><path class="vidcsf1jd"/>`,
		"fallback": "fluent:arrow-minimize-top-left-bottom-right-20-filled",
	});
}

export default Component;
