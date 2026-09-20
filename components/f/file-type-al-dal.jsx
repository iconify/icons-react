import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pry9pwb3h {
  fill: var(--svg-color--9f4246, #9f4246);
  d: path("M11.6 8c-.2-.6-.8-1-1.5-1H10c-.5 0-1.1.4-1.4 1L2 25h3.8l1-2.8h6.6l1 2.8h3.8zM7.9 19l2.2-6.1l2.2 6.1zm15.9 2.7V7.1h-3.5v15.6c0 1.2 1 2.2 2.3 2.3H30v-3.3z");
}
</style><path class="pry9pwb3h"/>`,
		"fallback": "vscode-icons:file-type-al-dal",
	});
}

export default Component;
