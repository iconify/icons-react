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
		"content": `<style>.j12w7c67j {
  fill: currentColor;
  d: path("m4.064 16.366l-2.972-2.91l.635-.66q2.137-2.148 4.857-3.222T12 8.5t5.404 1.074t4.85 3.222l.654.66l-2.971 2.91l-3.437-2.597v-3.465q-1.142-.396-2.277-.6T12 9.5t-2.223.204t-2.277.6v3.465z");
}
</style><path class="j12w7c67j"/>`,
		"fallback": "material-symbols-light:call-end-sharp",
	});
}

export default Component;
