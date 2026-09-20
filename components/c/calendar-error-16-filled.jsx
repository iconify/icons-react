import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.z6otak9jv {
  fill: currentColor;
  d: path("M11.5 6H2v5.5A2.5 2.5 0 0 0 4.5 14h2.1a5.5 5.5 0 0 1 4.9-8M14 4.5A2.5 2.5 0 0 0 11.5 2h-7A2.5 2.5 0 0 0 2 4.5V5h12zm2 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M11.5 9a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25");
}
</style><path class="z6otak9jv"/>`,
		"fallback": "fluent:calendar-error-16-filled",
	});
}

export default Component;
