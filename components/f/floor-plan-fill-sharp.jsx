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
		"content": `<style>.jfqex5thx {
  fill: currentColor;
  d: path("M12 2v7a1 1 0 0 0 2 0V2h7a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-7v-9a1 1 0 0 0-2 0v9H3a1 1 0 0 1-1-1v-7h7a1 1 0 0 0 0-2H2V3a1 1 0 0 1 1-1Z");
}
</style><path class="jfqex5thx"/>`,
		"fallback": "coolicons:floor-plan-fill-sharp",
	});
}

export default Component;
