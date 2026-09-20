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
		"content": `<style>.kahdv9bch {
  fill: currentColor;
  d: path("M3.77 21.23v-4.818l2.519-2.798l.713.713l-2.192 2.442h14.38l-2.18-2.43l.713-.714l2.508 2.787v4.819zm8.255-6.174L6.777 9.758l6.673-6.673l5.279 5.267zm.006-1.433l5.277-5.277L13.45 4.5L8.173 9.777z");
}
</style><path class="kahdv9bch"/>`,
		"fallback": "material-symbols-light:how-to-vote-sharp",
	});
}

export default Component;
