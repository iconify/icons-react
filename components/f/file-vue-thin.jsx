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
		"content": `<style>.e2wp1tawv {
  fill: currentColor;
  d: path("m83.77 153.35l-20 56a4 4 0 0 1-7.54 0l-20-56a4 4 0 0 1 7.54-2.7L60 196.11l16.23-45.46a4 4 0 0 1 7.54 2.7M208 156a4 4 0 0 0 0-8h-32a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h32a4 4 0 0 0 0-8h-28v-20h20a4 4 0 0 0 0-8h-20v-20Zm-64-8a4 4 0 0 0-4 4v38a14 14 0 0 1-28 0v-38a4 4 0 0 0-8 0v38a22 22 0 0 0 44 0v-38a4 4 0 0 0-4-4m68-60v24a4 4 0 0 1-8 0V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v72a4 4 0 0 1-8 0V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-13.66-4L156 41.65V84Z");
}
</style><path class="e2wp1tawv"/>`,
		"fallback": "ph:file-vue-thin",
	});
}

export default Component;
