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
		"content": `<style>.m85ufwpdo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.464 2.872l5.149 2.48q1.465.705 1.827 2.29l1.272 5.573q.361 1.584-.652 2.855l-3.564 4.469q-1.013 1.27-2.638 1.27H9.142q-1.625 0-2.638-1.27L2.94 16.07q-1.013-1.271-.652-2.855L3.56 7.642q.362-1.585 1.827-2.29l5.149-2.48q1.464-.705 2.928 0");
}
</style><path class="m85ufwpdo"/>`,
		"fallback": "uix-solid:heptagon",
	});
}

export default Component;
