import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dhlzhdcak {
  fill: currentColor;
  d: path("M237.31 120.53L183 39.12A16 16 0 0 0 169.73 32H86.27A16 16 0 0 0 73 39.12l-54.31 81.41a16 16 0 0 0-2.13 13.09L38 212.21A16 16 0 0 0 53.43 224H80a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h26.57A16 16 0 0 0 218 212.21l21.44-78.59a16 16 0 0 0-2.13-13.09M80 176V69l24 14.15V136a8 8 0 0 0 16 0V92.57l3.94 2.32a8 8 0 0 0 8.12 0l3.94-2.32V128a8 8 0 0 0 16 0V83.14L176 69v107Zm89.73-128l2.92 4.39L128 78.71L83.35 52.39L86.27 48ZM80 208H53.43L32 129.41l32-48V176a16 16 0 0 0 16 16Zm122.57 0H176v-16a16 16 0 0 0 16-16V81.41l32 48Z");
}
</style><path class="dhlzhdcak"/>`,
		"fallback": "ph:hoodie",
	});
}

export default Component;
