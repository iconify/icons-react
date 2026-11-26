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
		"content": `<style>.vdwy4yupr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 20L5 20C2.7908 20 1 18.2092 1 16L1 10.8284C1 10.0328 1.3161 9.2697 1.8787 8.7071L5.7071 4.8787C6.2697 4.3161 7.0328 4 7.8284 4L16.1716 4C16.9672 4 17.7303 4.3161 18.2929 4.8787L22.1213 8.7071C22.6839 9.2697 23 10.0328 23 10.8284L23 16C23 18.2092 21.2092 20 19 20Z");
}
</style><path clip-rule="evenodd" class="vdwy4yupr"/>`,
		"fallback": "keyline-icons:flow-loop-limit-fill",
	});
}

export default Component;
