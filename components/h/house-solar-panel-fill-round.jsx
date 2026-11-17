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
		"content": `<style>.siu5x0bkq {
  fill: currentColor;
  d: path("M16 22H8a5 5 0 0 1-5-5v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22m0-3a1 1 0 0 0 .992-1.124l-1-8A1 1 0 0 0 15 9H9a1 1 0 0 0-.992.876l-1 8A.997.997 0 0 0 8 19Zm-5-8v2H9.633l.25-2Zm2 2v-2h1.117l.25 2Zm-2 2v2H9.133l.25-2Zm2 2v-2h1.617l.25 2Z");
}
</style><path class="siu5x0bkq"/>`,
		"fallback": "coolicons:house-solar-panel-fill-round",
	});
}

export default Component;
