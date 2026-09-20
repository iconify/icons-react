import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hg8187bsc {
  cx: 12px;
  cy: 13.5px;
  fill: var(--svg-color--664500, #664500);
  rx: 2.5px;
  ry: 3.5px;
}

.ngpmpqbbo {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18");
}

.q-4sqnh6r {
  cx: 24px;
  cy: 13.5px;
  fill: var(--svg-color--664500, #664500);
  rx: 2.5px;
  ry: 3.5px;
}

.vf26kbrle {
  cx: 18px;
  cy: 25px;
  fill: var(--svg-color--664500, #664500);
  rx: 4px;
  ry: 5px;
}
</style><path class="ngpmpqbbo"/><ellipse class="vf26kbrle"/><ellipse class="hg8187bsc"/><ellipse class="q-4sqnh6r"/>`,
		"fallback": "twemoji:face-with-open-mouth",
	});
}

export default Component;
