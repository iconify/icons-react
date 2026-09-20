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
		"content": `<style>.v07yudefd {
  fill: currentColor;
  d: path("M56 120h160a20 20 0 0 0 7.79-38.42l-.46-.19L63.51 21.47A20 20 0 0 0 36 40v60a20 20 0 0 0 20 20m4-74.21L193.91 96H60ZM216 136H56a20 20 0 0 0-20 20v60a20 20 0 0 0 27.51 18.54l159.81-59.92l.46-.19A20 20 0 0 0 216 136M60 210.22V160h133.91Z");
}
</style><path class="v07yudefd"/>`,
		"fallback": "ph:flip-vertical-bold",
	});
}

export default Component;
