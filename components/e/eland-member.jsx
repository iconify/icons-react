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

.elzobwbts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.5 17h-9v14h9");
}

.h074hubot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M37.423 31.75A15.5 15.5 0 0 1 9.028 19.988A15.5 15.5 0 0 1 39.5 24h-31");
}
</style><circle class="cpk0fnbgt"/><path class="h074hubot"/><path class="elzobwbts"/>`,
		"fallback": "arcticons:eland-member",
	});
}

export default Component;
