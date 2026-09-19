import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ayxuultft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.587 5.5v22.069c0 8.246-6.685 14.931-14.932 14.931h-4.2");
}

.c1ms93b4r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.629 15.458L28.587 5.5l9.958 9.958");
}
</style><path class="c1ms93b4r"/><path class="ayxuultft"/>`,
		"fallback": "arcticons:emoji-arrow-pointing-rightwards-then-curving-upwards",
	});
}

export default Component;
