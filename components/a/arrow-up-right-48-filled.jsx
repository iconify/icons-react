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
		"content": `<style>.m_qt9gm9y {
  fill: currentColor;
  d: path("M22.5 6a1.5 1.5 0 0 0 0 3h14.379L6.439 39.44a1.5 1.5 0 1 0 2.122 2.12L39 11.122V25.5a1.5 1.5 0 0 0 3 0v-18A1.5 1.5 0 0 0 40.5 6z");
}
</style><path class="m_qt9gm9y"/>`,
		"fallback": "fluent:arrow-up-right-48-filled",
	});
}

export default Component;
