import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.umhepwb_l {
  fill: currentColor;
  d: path("M12.592 3.497a2.25 2.25 0 0 1 2.816 0l7.75 6.216c.532.427.842 1.073.842 1.756v11.28a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 22.749v-11.28c0-.683.31-1.33.842-1.756zm5.688 8.973a.75.75 0 0 0-1.06 0l-4.72 4.72l-1.72-1.72a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0 0-1.06");
}
</style><path class="umhepwb_l"/>`,
		"fallback": "fluent:home-checkmark-28-filled",
	});
}

export default Component;
