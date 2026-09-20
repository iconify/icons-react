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
		"content": `<style>.fnlgpmbux {
  fill: var(--svg-color--664500, #664500);
  d: path("M12 28c2-5 13-5 13-3c0 1-8-1-13 3");
}

.j_ykwbb4m {
  cx: 24.5px;
  cy: 16.5px;
  fill: var(--svg-color--664500, #664500);
  rx: 2.5px;
  ry: 3.5px;
}

.tg31urbgg {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18");
}

.vrd83_b4t {
  cx: 11.5px;
  cy: 16.5px;
  fill: var(--svg-color--664500, #664500);
  rx: 2.5px;
  ry: 3.5px;
}
</style><path class="tg31urbgg"/><ellipse class="vrd83_b4t"/><ellipse class="j_ykwbb4m"/><path class="fnlgpmbux"/>`,
		"fallback": "twemoji:confused-face",
	});
}

export default Component;
