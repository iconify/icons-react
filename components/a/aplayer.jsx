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
		"content": `<style>.hawqbckxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m43.5 28.171l-2.711-8.342l-2.816 8.342m.939-2.815h3.65");
}

.ivtkkrh5p {
  cx: 22.396px;
  cy: 24px;
  r: 0.782px;
  fill: currentColor;
}

.l6ax3j3_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.647 30.442a18.161 18.161 0 1 1 0-12.885");
}

.x1f46ebno {
  cx: 22.396px;
  cy: 24px;
  r: 7.3px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="l6ax3j3_u"/><path class="hawqbckxz"/><circle class="x1f46ebno"/><circle class="ivtkkrh5p"/>`,
		"fallback": "arcticons:aplayer",
	});
}

export default Component;
