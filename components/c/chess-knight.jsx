import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dqx9vabky {
  fill: currentColor;
  d: path("M5.885 21.02v-3.245q0-.467.232-.842q.233-.375.637-.593l4.669-2.398V11.29l-3.802 1.955q-.223.131-.477.177q-.253.046-.507.046q-.604 0-1.14-.317q-.537-.317-.83-.911q-.273-.535-.223-1.134t.379-1.096l3.004-4.625L6.25 2.981h4.77q2.901 0 4.921 2.073t2.02 5.062v10.903z");
}
</style><path class="dqx9vabky"/>`,
		"fallback": "material-symbols-light:chess-knight",
	});
}

export default Component;
