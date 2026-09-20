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
		"content": `<style>.k5fwsnbxi {
  cx: 11.5px;
  cy: 15.5px;
  fill: var(--svg-color--65471b, #65471b);
  rx: 2.5px;
  ry: 3.5px;
}

.kd-xqr-fh {
  fill: var(--svg-color--65471b, #65471b);
  d: path("m11.209 27.978l14-3a1.001 1.001 0 0 0-.419-1.957l-14 3a1.001 1.001 0 0 0 .419 1.957");
}

.ngpmpqbbo {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18");
}

.tka410_nv {
  cx: 24.5px;
  cy: 15.5px;
  fill: var(--svg-color--65471b, #65471b);
  rx: 2.5px;
  ry: 3.5px;
}
</style><path class="ngpmpqbbo"/><ellipse class="k5fwsnbxi"/><ellipse class="tka410_nv"/><path class="kd-xqr-fh"/>`,
		"fallback": "twemoji:face-with-diagonal-mouth",
	});
}

export default Component;
