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
		"content": `<style>.ef9_wqb0d {
  fill: var(--svg-color--913e4e, #913e4e);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z");
}

.s-q22x7dx {
  fill: var(--svg-color--d80027, #d80027);
  d: path("M20.4 10a10.5 10.5 0 1 0 10.5 10.5A10.5 10.5 0 0 0 20.4 10m0 18.4A7.8 7.8 0 0 1 14 16l11 11a8.56 8.56 0 0 1-4.6 1.4m6.4-3.3l-11-11a7.964 7.964 0 0 1 11 1.8a7.8 7.8 0 0 1 0 9.2");
}
</style><path class="ef9_wqb0d"/><path class="s-q22x7dx"/>`,
		"fallback": "vscode-icons:folder-type-private",
	});
}

export default Component;
