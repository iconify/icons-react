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
		"content": `<style>.usffms9ll {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 4.25h16q.598 0 1.038.159L2.055 18.396q-.083.061-.146.142q-.159-.439-.159-1.038v-11q0-2.25 2.25-2.25m17.945 1.354q.083-.061.146-.142q.159.439.159 1.038v11q0 .598-.159 1.038l-6.3-8.4zm-7.362 5.424L2.962 19.591q.44.159 1.038.159h16q.599 0 1.038-.159q-.078-.061-.138-.141z");
}
</style><path class="usffms9ll"/>`,
		"fallback": "uix-solid:golden-triangle",
	});
}

export default Component;
