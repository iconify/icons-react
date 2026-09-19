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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zivojzbui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.999 18.75L33.14 13.5v5.25L15 24zm0 10.5L33.14 24v5.25L15 34.5z");
}
</style><path class="zivojzbui"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:bharatpe",
	});
}

export default Component;
