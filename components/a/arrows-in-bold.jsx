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
		"content": `<style>.ijeqbj4vg {
  fill: currentColor;
  d: path("M140 104V64a12 12 0 0 1 24 0v11l35.51-35.52a12 12 0 0 1 17 17L181 92h11a12 12 0 0 1 0 24h-40a12 12 0 0 1-12-12m-36 36H64a12 12 0 0 0 0 24h11l-35.49 35.51a12 12 0 0 0 17 17L92 181v11a12 12 0 0 0 24 0v-40a12 12 0 0 0-12-12m77 24h11a12 12 0 0 0 0-24h-40a12 12 0 0 0-12 12v40a12 12 0 0 0 24 0v-11l35.51 35.52a12 12 0 0 0 17-17ZM104 52a12 12 0 0 0-12 12v11L56.49 39.51a12 12 0 0 0-17 17L75 92H64a12 12 0 0 0 0 24h40a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12");
}
</style><path class="ijeqbj4vg"/>`,
		"fallback": "ph:arrows-in-bold",
	});
}

export default Component;
