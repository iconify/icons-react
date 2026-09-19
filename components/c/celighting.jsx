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
		"content": `<style>.xp97wmbdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.326 8.174a15.826 15.826 0 0 0 0 31.652h19.218A3.957 3.957 0 0 0 43.5 35.87h0a3.957 3.957 0 0 0-3.956-3.957H20.326a7.913 7.913 0 0 1-.106-15.826h19.324A3.957 3.957 0 0 0 43.5 12.13h0a3.957 3.957 0 0 0-3.956-3.956z");
}

.ynqbq5bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.326 20.044A3.957 3.957 0 0 0 16.37 24h0a3.957 3.957 0 0 0 3.957 3.957h19.217A3.957 3.957 0 0 0 43.5 24h0a3.957 3.957 0 0 0-3.956-3.956z");
}
</style><path class="xp97wmbdf"/><path class="ynqbq5bbs"/>`,
		"fallback": "arcticons:celighting",
	});
}

export default Component;
