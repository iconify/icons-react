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
		"content": `<style>.kjzxhlnlo {
  fill: currentColor;
  d: path("M216 60h-44V48a20 20 0 0 0-20-20h-48a20 20 0 0 0-20 20v12H40a12 12 0 0 0-12 12v128a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12M36 108h184v56H36Zm56-60a12 12 0 0 1 12-12h48a12 12 0 0 1 12 12v12H92ZM40 68h176a4 4 0 0 1 4 4v28H36V72a4 4 0 0 1 4-4m176 136H40a4 4 0 0 1-4-4v-28h184v28a4 4 0 0 1-4 4");
}
</style><path class="kjzxhlnlo"/>`,
		"fallback": "ph:briefcase-metal-thin",
	});
}

export default Component;
