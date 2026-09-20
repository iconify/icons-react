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
		"content": `<style>.ne7u1ccnn {
  fill: currentColor;
  d: path("m8.066 18.943l6.5-14.5a.75.75 0 0 1 1.404.518l-.036.096l-6.5 14.5a.75.75 0 0 1-1.404-.518zl6.5-14.5zM2.22 11.47l4.25-4.25a.75.75 0 0 1 1.133.976l-.073.085L3.81 12l3.72 3.719a.75.75 0 0 1-.976 1.133l-.084-.073l-4.25-4.25a.75.75 0 0 1-.073-.976zl4.25-4.25zm14.25-4.25a.75.75 0 0 1 .976-.073l.084.073l4.25 4.25a.75.75 0 0 1 .073.976l-.073.085l-4.25 4.25a.75.75 0 0 1-1.133-.977l.073-.084L20.19 12l-3.72-3.72a.75.75 0 0 1 0-1.06");
}
</style><path class="ne7u1ccnn"/>`,
		"fallback": "fluent:code-24-regular",
	});
}

export default Component;
