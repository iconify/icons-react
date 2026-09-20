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
		"content": `<style>.y6stp4bro {
  fill: currentColor;
  d: path("M22.5 6a1.5 1.5 0 0 0 0 3h14.379l-6.44 6.44a1.5 1.5 0 0 0 2.122 2.12L39 11.122V25.5a1.5 1.5 0 0 0 3 0v-18A1.5 1.5 0 0 0 40.5 6zm-5.94 27.56a1.5 1.5 0 0 0-2.12-2.12l-8 8a1.5 1.5 0 0 0 2.12 2.12zm12-14.12a1.5 1.5 0 0 1 0 2.12l-8 8a1.5 1.5 0 0 1-2.12-2.12l8-8a1.5 1.5 0 0 1 2.12 0");
}
</style><path class="y6stp4bro"/>`,
		"fallback": "fluent:arrow-up-right-dashes-48-filled",
	});
}

export default Component;
