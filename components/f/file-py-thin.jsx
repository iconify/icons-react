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
		"content": `<style>.h7ifmkwyr {
  fill: currentColor;
  d: path("m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v72a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-32a4 4 0 0 0 0 8h32a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM64 148H48a4 4 0 0 0-4 4v56a4 4 0 0 0 8 0v-12h12a24 24 0 0 0 0-48m0 40H52v-32h12a16 16 0 0 1 0 32m87.39-33.88l-19.39 31V208a4 4 0 0 1-8 0v-22.85l-19.39-31a4 4 0 0 1 6.78-4.24L128 176.45l16.61-26.57a4 4 0 1 1 6.78 4.24");
}
</style><path class="h7ifmkwyr"/>`,
		"fallback": "ph:file-py-thin",
	});
}

export default Component;
