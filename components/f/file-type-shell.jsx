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
		"content": `<style>.cuu9-1duc {
  fill: var(--svg-color--d9b400, #d9b400);
  d: path("M29.4 27.6H2.5V4.5h26.9Zm-25.9-1h24.9V5.5H3.5Z");
}

.uyb4qvihi {
  fill: var(--svg-color--d9b400, #d9b400);
  d: path("m6.077 19.316l-.555-.832l4.844-3.229l-4.887-4.071l.641-.768l5.915 4.928zM12.7 18.2h7.8v1h-7.8zM2.5 5.5h26.9v1.9H2.5z");
}
</style><path class="cuu9-1duc"/><path class="uyb4qvihi"/>`,
		"fallback": "vscode-icons:file-type-shell",
	});
}

export default Component;
