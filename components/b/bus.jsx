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
		"content": `<style>.ctx7l6bhs {
  fill: currentColor;
  d: path("M184 32H72a32 32 0 0 0-32 32v144a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h64v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V64a32 32 0 0 0-32-32M56 176v-56h144v56Zm0-96h144v24H56Zm16-32h112a16 16 0 0 1 16 16H56a16 16 0 0 1 16-16m8 160H56v-16h24Zm96 0v-16h24v16Zm-72-60a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m72-68v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0M24 80v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0");
}
</style><path class="ctx7l6bhs"/>`,
		"fallback": "ph:bus",
	});
}

export default Component;
