import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f9rwn39dy {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16M7.316 6.323c-.632-.291-1.286.363-.995.995l1.502 3.264c.324.704.89 1.269 1.593 1.593l3.265 1.502c.632.29 1.286-.363.995-.995l-1.503-3.263a3.25 3.25 0 0 0-1.593-1.593z");
}
</style><path class="f9rwn39dy"/>`,
		"fallback": "fluent:compass-northwest-20-filled",
	});
}

export default Component;
