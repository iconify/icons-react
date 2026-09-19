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
		"content": `<style>.bvq6_bbjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.207 34.825H8.738V15.577l10.848.018l-.02-11.095h11.228v8.675M19.566 4.5L8.739 15.577");
}

.xe3yfqbww {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.054 24.27l-.02-11.095H39.26V43.5H17.206V24.252Zm-.021-11.095L17.206 24.252");
}
</style><path class="xe3yfqbww"/><path class="bvq6_bbjb"/>`,
		"fallback": "arcticons:ctrl-c-programming-idle-game",
	});
}

export default Component;
