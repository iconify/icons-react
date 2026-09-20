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
		"content": `<style>.h9gifm4ew {
  fill: var(--svg-color--34d399, #34d399);
  d: path("m6.65 5.18l16.86-1.35c.25-.02.47.17.49.42l1.77 22.08a.45.45 0 0 1-.42.49L8.49 28.17a.45.45 0 0 1-.49-.42L6.23 5.67a.45.45 0 0 1 .42-.49");
}

.j8ksr1dwr {
  fill: var(--svg-color--b4fae2, #b4fae2);
  stroke: var(--svg-color--b4fae2, #b4fae2);
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--0-47px, 0.47px);
  d: path("m21.86 21.64l-2.19-10.17L15 15zM17 16.94l-6.86-6.64l2.19 10.18z");
}

.qlxyg5b6e {
  fill: var(--svg-color--34d399, #34d399);
  fill-opacity: var(--svg-fill-opacity--0-5, 0.5);
  d: path("m3.6 8.87l15.48-6.83c.23-.1.5 0 .6.23l8.94 20.26c.1.23 0 .5-.23.6l-15.47 6.83c-.23.1-.5 0-.6-.23L3.38 9.47c-.1-.23 0-.5.23-.6z");
}
</style><path class="qlxyg5b6e"/><path class="h9gifm4ew"/><path class="j8ksr1dwr"/>`,
		"fallback": "vscode-icons:file-type-histoire",
	});
}

export default Component;
