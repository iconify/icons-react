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
		"content": `<style>.cm-ry-u8e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 42.5h37m0-27.935h-37L24 5.5zM7 39.447h34M7 17.618h34M26.075 34.953a1.44 1.44 0 0 0 1.44 1.441h0h-7.03h0a1.44 1.44 0 0 0 1.44-1.44V22.11a1.44 1.44 0 0 0-1.44-1.44h7.03a1.44 1.44 0 0 0-1.44 1.44zm-12.485 0a1.44 1.44 0 0 0 1.441 1.441h0H8h0a1.44 1.44 0 0 0 1.441-1.44V22.11A1.44 1.44 0 0 0 8 20.67h7.031a1.44 1.44 0 0 0-1.44 1.44z");
}

.vwypbl_go {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.59 34.953a1.44 1.44 0 0 0 1.441 1.441h0H8h0a1.44 1.44 0 0 0 1.441-1.44V22.11A1.44 1.44 0 0 0 8 20.67h7.031a1.44 1.44 0 0 0-1.44 1.44zm24.969 0A1.44 1.44 0 0 0 40 36.394h0h-7.031h0a1.44 1.44 0 0 0 1.44-1.44V22.11a1.44 1.44 0 0 0-1.44-1.44H40a1.44 1.44 0 0 0-1.441 1.44z");
}
</style><path class="cm-ry-u8e"/><path class="vwypbl_go"/>`,
		"fallback": "arcticons:bank-1",
	});
}

export default Component;
