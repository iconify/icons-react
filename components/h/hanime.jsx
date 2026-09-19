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
		"content": `<style>.lh1os2bpm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.967 5.5h2.828a7.017 7.017 0 0 1 7.014 7.013v28.674c0 .725-.589 1.313-1.313 1.313h-2.829a7.017 7.017 0 0 1-7.013-7.013V6.813c0-.725.588-1.313 1.313-1.313m24.366 0h-2.829c-.725 0-1.313.588-1.313 1.313v11.775H18.809v10.143h10.382v6.756a7.013 7.013 0 0 0 7.013 7.013h2.83c.724 0 1.312-.588 1.312-1.313V12.513A7.013 7.013 0 0 0 33.333 5.5");
}
</style><path class="lh1os2bpm"/>`,
		"fallback": "arcticons:hanime",
	});
}

export default Component;
