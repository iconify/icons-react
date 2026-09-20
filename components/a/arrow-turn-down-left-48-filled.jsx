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
		"content": `<style>.iadiydzyj {
  fill: currentColor;
  d: path("M35 7.5a1.5 1.5 0 0 1 3 0v18a7.5 7.5 0 0 1-7.5 7.5H13.121l6.44 6.44a1.5 1.5 0 0 1-2.122 2.12l-9-9a1.5 1.5 0 0 1 0-2.12l9-9a1.5 1.5 0 0 1 2.122 2.12L13.12 30H30.5a4.5 4.5 0 0 0 4.5-4.5z");
}
</style><path class="iadiydzyj"/>`,
		"fallback": "fluent:arrow-turn-down-left-48-filled",
	});
}

export default Component;
