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
		"content": `<style>.n5tn526ko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.5 39.56l4.405-8.564H32.81l4.404 8.563m-15.857-8.562v8.563m12.539-14.307l-25.05.078");
}

.uoamh9bvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.572 21.286l6.098 4.348l1.83-1.779S32.612 8.442 21.357 8.442C14.165 8.338 8.25 14.088 8.143 21.286c.107 7.2 6.022 12.949 13.214 12.845c7.192.104 13.107-5.646 13.214-12.845");
}
</style><path class="uoamh9bvc"/><path class="n5tn526ko"/>`,
		"fallback": "arcticons:emoji-alembic",
	});
}

export default Component;
