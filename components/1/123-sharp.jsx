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
		"content": `<style>.kjycimu4r {
  fill: currentColor;
  d: path("M5.885 14.692v-4.5h-1.5v-.884h2.384v5.384zm3.384 0v-3.076h3.039v-1.424H9.269v-.884h3.923v3.077h-3.038v1.423h3.038v.884zm5.923 0v-.884h3.039v-1.423h-2.039v-.77h2.039v-1.423h-3.039v-.884h3.924v5.384z");
}
</style><path class="kjycimu4r"/>`,
		"fallback": "material-symbols-light:123-sharp",
	});
}

export default Component;
