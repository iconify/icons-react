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
		"content": `<style>.pon1rub3t {
  fill: currentColor;
  d: path("M9.25 21v-5.48h5.48V21zM3 14.75V9.27h5.48v5.48zm6.25 0V9.27h5.48v5.48zm6.25 0V9.27H21v5.48zm0-6.25V3H21v5.5z");
}
</style><path class="pon1rub3t"/>`,
		"fallback": "material-symbols-light:crossword",
	});
}

export default Component;
