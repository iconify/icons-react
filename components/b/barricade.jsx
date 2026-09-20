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
		"content": `<style>.y2n3--bmj {
  fill: currentColor;
  d: path("M224 64H32a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h24v32a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0v-32h24a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m0 64.69L175.31 80H224ZM80.69 80l72 72h-49.38L32 80.69V80ZM32 103.31L80.69 152H32ZM224 152h-48.69l-72-72h49.38L224 151.32z");
}
</style><path class="y2n3--bmj"/>`,
		"fallback": "ph:barricade",
	});
}

export default Component;
