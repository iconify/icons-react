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
		"content": `<style>.jjlv7pr_s {
  fill: currentColor;
  d: path("m15.779 12.935l-4.021-4.021l5.334-5.33L21.108 7.6zm3.983 8.242l-6.116-6.115l-4.788 4.788H7.727l-.77-.77l-1.15 1.15H3.04l2.534-2.534l-.73-.73v-1.132l4.788-4.788l-6.808-6.808l.714-.713l16.938 16.938z");
}
</style><path class="jjlv7pr_s"/>`,
		"fallback": "material-symbols-light:ink-highlighter-off-sharp",
	});
}

export default Component;
