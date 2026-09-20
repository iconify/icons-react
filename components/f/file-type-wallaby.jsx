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
		"content": `<style>.j8izj1sfb {
  fill: var(--svg-color--5fb050, #5fb050);
  d: path("M2 16h14V2h14v28H2Z");
}
</style><path class="j8izj1sfb"/>`,
		"fallback": "vscode-icons:file-type-wallaby",
	});
}

export default Component;
