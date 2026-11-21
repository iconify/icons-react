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
		"content": `<style>.uvgm99hmg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 1L20 1C20.5523 1 21 1.4477 21 2L21 22C21 22.7247 20.2533 23.2057 19.5918 22.9129L12 19.5177L4.4082 22.9129C3.7467 23.2057 3 22.7247 3 22L3 2C3 1.4477 3.4477 1 4 1ZM8 10.9142L10.2929 13.2071C10.4804 13.3946 10.7348 13.5 11 13.5C11.2652 13.5 11.5196 13.3946 11.7071 13.2071L16 8.9142L14.5858 7.5L11 11.0858L9.4142 9.5Z");
}
</style><path clip-rule="evenodd" class="uvgm99hmg"/>`,
		"fallback": "keyline-icons:bookmark-check-sharp-fill",
	});
}

export default Component;
