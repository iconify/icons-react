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
		"content": `<style>.kz63pv4cv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8.291 11.81l1.56-4.286a1.52 1.52 0 0 1 2.856 1.04l.52-1.428a1.52 1.52 0 0 1 2.857 1.04l-.78 2.142a1.52 1.52 0 0 1 2.857 1.04l-2.08 5.713a3.8 3.8 0 0 1-4.87 2.271l-2.857-1.04c-.457-.166-.877-.61-1.168-1.234L4.46 11.224C3.552 9.276 6.474 7.913 7.383 9.86zm4.416-3.246l-1.3 3.57m3.897-1.816l-1.04 2.857M3.021 5.322a6.5 6.5 0 0 1 5.546-2.297m12.408 12.408a6.5 6.5 0 0 1-2.297 5.546");
}
</style><path class="kz63pv4cv"/>`,
		"fallback": "coolicons:hand-wave-sharp",
	});
}

export default Component;
