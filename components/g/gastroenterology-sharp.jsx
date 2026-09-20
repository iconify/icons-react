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
		"content": `<style>.v_r2dhugr {
  fill: currentColor;
  d: path("M3.98 21.5V16q0-1.038.732-1.77t1.769-.73h2q1.461 0 2.48-1.02t1.02-2.48q0-.617-.441-1.059q-.442-.441-1.06-.441q-.632 0-1.065-.434Q8.98 7.633 8.98 7V2.5H13v1.058q0 .384.279.663t.663.279q2.599 0 4.328 1.922T20 11v1q0 2.714-1.893 4.607T13.5 18.5h-4q-.617 0-1.059.441Q8 19.383 8 20v1.5z");
}
</style><path class="v_r2dhugr"/>`,
		"fallback": "material-symbols-light:gastroenterology-sharp",
	});
}

export default Component;
