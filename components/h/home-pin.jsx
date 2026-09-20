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
		"content": `<style>.kosl59b9i {
  fill: currentColor;
  d: path("M9.462 12.654h1.692v-2.365h1.692v2.365h1.692V8.596L12 6.904L9.461 8.596zM12 21.019q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814");
}
</style><path class="kosl59b9i"/>`,
		"fallback": "material-symbols-light:home-pin",
	});
}

export default Component;
