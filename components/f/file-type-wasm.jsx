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
		"content": `<style>.ikmczg2vw {
  fill: var(--svg-color--fff, #fff);
  d: path("M8.5 17.09h1.84l1.27 6.71h.02l1.51-6.71h1.73l1.37 6.8h.03l1.44-6.8h1.8l-2.35 9.87h-1.83l-1.36-6.72h-.03l-1.46 6.72h-1.87Zm13.1 0h2.91l2.9 9.87h-1.9l-.64-2.2h-3.32l-.48 2.2H19.2Zm1.11 2.43l-.8 3.62h2.5l-.92-3.63Z");
}

.j47pkrb9l {
  fill: var(--svg-color--654ff0, #654ff0);
  d: path("M19.15 2.06v.15a3.2 3.2 0 1 1-6.4 0v-.15H2.03v27.88H29.9V2.06Z");
}
</style><path class="j47pkrb9l"/><path class="ikmczg2vw"/>`,
		"fallback": "vscode-icons:file-type-wasm",
	});
}

export default Component;
