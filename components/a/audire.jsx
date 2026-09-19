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
		"content": `<style>.l5-hg7b8f {
  width: 16.441px;
  height: 22.933px;
  x: 20.109px;
  y: 8.997px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.914px;
  ry: 4.914px;
}

.p-q71vbbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.586 12.582l11.625 11.626m-6.235 6.242c4.737 2.061 9.04-.998 12.524-6.341m-37 1.848c3.835-5.524 7.84-8.775 12.365-6.64");
}

.un62fibjc {
  width: 16.441px;
  height: 6.619px;
  x: 7.933px;
  y: 29.33px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.31px;
  ry: 3.31px;
}
</style><rect transform="rotate(45 28.33 20.464)" class="l5-hg7b8f"/><rect transform="rotate(45 16.154 32.64)" class="un62fibjc"/><path class="p-q71vbbz"/>`,
		"fallback": "arcticons:audire",
	});
}

export default Component;
