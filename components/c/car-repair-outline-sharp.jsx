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
		"content": `<style>.znyqtgbjy {
  fill: currentColor;
  d: path("M11.5 20.77v-3h-7v-1h15v1h-7v3zm-2.345-8.961q.23-.23.23-.54t-.23-.54t-.54-.229t-.539.23t-.23.54q0 .309.23.539t.54.23t.539-.23m6.769 0q.23-.23.23-.54t-.23-.54t-.54-.229t-.539.23t-.23.54t.23.539t.54.23t.539-.23M6 9.523l1.656-4.754h8.688L18 9.523v6.246h-1v-2H7v2H6zm1.304-.754h9.392l-1.046-3h-7.3zM7 9.77v3zm0 3h10v-3H7z");
}
</style><path class="znyqtgbjy"/>`,
		"fallback": "material-symbols-light:car-repair-outline-sharp",
	});
}

export default Component;
