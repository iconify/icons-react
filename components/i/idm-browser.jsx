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
		"content": `<style>.blzf6h3yg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.388 11.012c5.289-.285 10.791 2.763 12.617 9.736a8.159 8.159 0 0 1 .06 16.258H13.26c-10.922-1.482-12.416-17.385 0-19.52a12.03 12.03 0 0 1 10.127-6.474m20.113 2.81h-5.656m2.828 2.827v-5.655");
}

.kkjg-1pux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.346 25.636h15.308M17.39 21.778h13.221m-13.22 7.715h13.22m-6.61 3.797V17.981");
}

.og_sjg0ts {
  cx: 24px;
  cy: 25.636px;
  r: 7.654px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xe7lwe1py {
  cx: 24px;
  cy: 25.636px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.857px;
  ry: 7.654px;
}
</style><path class="blzf6h3yg"/><circle class="og_sjg0ts"/><path class="kkjg-1pux"/><ellipse class="xe7lwe1py"/>`,
		"fallback": "arcticons:idm-browser",
	});
}

export default Component;
