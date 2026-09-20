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
		"content": `<style>.zl_mtn6es {
  fill: var(--svg-color--6551f3, #6551f3);
  d: path("M28.44 2H3.56v8.8h24.88zM3.56 19.04a18.5 18.5 0 0 1 24.88 0V30L16 17.38L3.56 30z");
}
</style><path class="zl_mtn6es"/>`,
		"fallback": "vscode-icons:file-type-aikido",
	});
}

export default Component;
