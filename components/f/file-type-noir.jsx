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
		"content": `<style>.rd4vukbue {
  fill: var(--svg-color--d2d2d2, #d2d2d2);
  d: path("M2.58 30h11.1V12.92c0-1.26.9-2.17 2.34-2.17c1.18 0 2.3.9 2.3 2.17V30h11.1V3.78c0-.98-.8-1.78-1.78-1.78H2.58z");
}
</style><path class="rd4vukbue"/>`,
		"fallback": "vscode-icons:file-type-noir",
	});
}

export default Component;
