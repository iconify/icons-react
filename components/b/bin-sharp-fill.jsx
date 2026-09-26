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
		"content": `<style>.inyb3balg {
  fill: currentColor;
  d: path("M21 8L19 8L19 22C19 22.5523 18.5523 23 18 23L6 23C5.4477 23 5 22.5523 5 22L5 8L3 8L3 6L21 6L21 8ZM15 3L9 3L9 1L15 1L15 3Z");
}
</style><path class="inyb3balg"/>`,
		"fallback": "keyline-icons:bin-sharp-fill",
	});
}

export default Component;
