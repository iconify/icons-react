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
		"content": `<style>.luflmn7rd {
  fill: currentColor;
  d: path("M120 180h-12v-8a24 24 0 0 0-48 0v8H48a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h72a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4m-52-8a16 16 0 0 1 32 0v8H68Zm48 48H52v-32h64Zm94.83-134.83l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v88a4 4 0 0 0 8 0V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4h-40a4 4 0 0 0 0 8h40a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156Z");
}
</style><path class="luflmn7rd"/>`,
		"fallback": "ph:file-lock-thin",
	});
}

export default Component;
