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
		"content": `<style>.mtmzo187w {
  fill: currentColor;
  d: path("m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M156 41.65L198.34 84H156ZM200 220H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h92v52a4 4 0 0 0 4 4h52v124a4 4 0 0 1-4 4m-50.74-52.39a32.05 32.05 0 1 0-5.65 5.65l13.56 13.57a4 4 0 0 0 5.66-5.66ZM100 148a24 24 0 1 1 24 24a24 24 0 0 1-24-24");
}
</style><path class="mtmzo187w"/>`,
		"fallback": "ph:file-magnifying-glass-thin",
	});
}

export default Component;
