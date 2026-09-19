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
		"content": `<style>.n8fjadbaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5v37m-8.224-28.71v20.42m16.448-20.42v20.42M7.552 21.901v4.02m32.896-4.02v4.02");
}
</style><path class="n8fjadbaz"/>`,
		"fallback": "arcticons:fossify-voicerecorder",
	});
}

export default Component;
