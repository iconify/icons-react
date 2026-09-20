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
		"content": `<style>.ukk7adcin {
  fill: var(--svg-color--f57f17, #f57f17);
  d: path("M20 23h-8.14a4.2 4.2 0 0 0-.43-1L22 11.43a3.86 3.86 0 0 0 2 .57a4 4 0 1 0-3.86-5h-8.28a4 4 0 1 0 0 2h8.28c.099.35.244.687.43 1L10 20.57A3.86 3.86 0 0 0 8 20a4 4 0 1 0 3.86 5H20v3h8v-8h-8zM8 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m16-4a2 2 0 1 1 0 4a2 2 0 0 1 0-4M8 26a2 2 0 1 1 0-4a2 2 0 0 1 0 4m14-4h4v4h-4z");
}
</style><path class="ukk7adcin"/>`,
		"fallback": "vscode-icons:file-type-pipeline",
	});
}

export default Component;
