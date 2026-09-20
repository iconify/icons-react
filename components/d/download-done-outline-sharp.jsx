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
		"content": `<style>.fu_mmrkey {
  fill: currentColor;
  d: path("m9.55 15.192l-4.579-4.578l.713-.714l3.866 3.866L18.316 5l.713.714zM6 19v-1h12v1z");
}
</style><path class="fu_mmrkey"/>`,
		"fallback": "material-symbols-light:download-done-outline-sharp",
	});
}

export default Component;
