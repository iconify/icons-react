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
		"content": `<style>.vqzbho7_l {
  fill: currentColor;
  d: path("M8 22q-.825 0-1.412-.587T6 20v-8H5q-.825 0-1.412-.587T3 10V6q0-.825.588-1.412T5 4h6q.425 0 .713.288T12 5v15q0 .825-.587 1.413T10 22zm11.25-9.75Q17.5 14 15 14q-.425 0-.712-.288T14 13V3q0-.425.288-.712T15 2q2.5 0 4.25 1.75T21 8t-1.75 4.25");
}
</style><path class="vqzbho7_l"/>`,
		"fallback": "material-symbols:earbud-left-rounded",
	});
}

export default Component;
