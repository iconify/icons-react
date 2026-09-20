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
		"content": `<style>.dyblc9bbu {
  fill: currentColor;
  d: path("m12 22.3l-9-5.175V6.875L12 1.7l9 5.175v10.25zm-1-9.725v6.85L12 20l1-.575v-6.85L19 9.1V8.05l-1.075-.625L12 10.85L6.075 7.425L5 8.05V9.1z");
}
</style><path class="dyblc9bbu"/>`,
		"fallback": "material-symbols:deployed-code-sharp",
	});
}

export default Component;
