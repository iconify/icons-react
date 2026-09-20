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
		"content": `<style>.mas5i-bla {
  fill: currentColor;
  d: path("M8.275 21L3 15.725v-7.45L8.275 3h7.45L21 8.275v7.45L15.725 21Zm2.075-1.5h.8L17 10.35h-4.2l.85-5.85h-.8l-5.9 9.15h4.2Z");
}
</style><path class="mas5i-bla"/>`,
		"fallback": "material-symbols:amp-error",
	});
}

export default Component;
