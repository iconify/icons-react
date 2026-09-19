import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gpl3oupai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.848 6.92c1.076 3.228 1.076 6.456 1.076 6.456S18.621 12.3 15.931 12.3c-2.152 0-2.152 4.303 0 4.303c2.51 0 6.993-1.613 6.993-1.076c0 5.38-2.69 6.456-2.69 6.456L24 43.5l3.765-21.517s-2.69-1.076-2.69-6.456c0-.537 4.842 1.076 6.994 1.076s2.152-4.303 0-4.303s-6.993 1.076-6.993 1.076s0-3.228 1.076-6.455s-5.38-3.228-4.304 0");
}
</style><path class="gpl3oupai"/>`,
		"fallback": "arcticons:banco-galicia",
	});
}

export default Component;
