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
		"content": `<style>.pcrg7_beg {
  fill: var(--svg-color--921a1e, #921a1e);
  d: path("M7.25 24.75h17.5L12.5 12.5l-5.25 5.25ZM2 30h28V2H16L2 16Zm25.375-2.625H4.625v-10.5l12.25-12.25h10.5Z");
}
</style><path class="pcrg7_beg"/>`,
		"fallback": "vscode-icons:file-type-erb",
	});
}

export default Component;
