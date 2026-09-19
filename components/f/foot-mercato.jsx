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
		"content": `<style>.bjuavhbxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.422 15.606l2.17 6.008l-5.376-3.766l-5.145 4.025l1.812-6.31l-5.247-3.91l6.555.087l1.983-6.24l2.07 6.239l6.54.071z");
}

.vcuo19zqw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.64 11.825h15.724l-.014 8.596H24.74v4.399h13.7v7.747h-13.7V42.5H14.147V25.566");
}
</style><path class="bjuavhbxp"/><path class="vcuo19zqw"/>`,
		"fallback": "arcticons:foot-mercato",
	});
}

export default Component;
