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
		"content": `<style>.jsfjqfbqu {
  d: path("M21.25 4a.75.75 0 0 1 .75.75v6.5A3.75 3.75 0 0 1 18.25 15H4.586l3.72 3.72a.75.75 0 0 1 .072.976l-.073.084a.75.75 0 0 1-.976.073l-.084-.073l-5-5a.75.75 0 0 1-.073-.976l.073-.084l5-5a.75.75 0 0 1 1.133.976l-.073.084l-3.72 3.72H18.25a2.25 2.25 0 0 0 2.245-2.096l.005-.154v-6.5a.75.75 0 0 1 .75-.75z");
  fill: currentColor;
  fill-rule: nonzero;
}
</style><path class="jsfjqfbqu"/>`,
		"fallback": "fluent:arrow-enter-24-regular",
	});
}

export default Component;
