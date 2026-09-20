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
		"content": `<style>.lmh4whbrs {
  cx: 16px;
  cy: 16px;
  r: 14px;
}

.t0m9q0h_t {
  fill: var(--svg-color--fff, #fff);
  d: path("m14.651 7.525l-.011-.011a1.556 1.556 0 0 0-2.2 0l-7.38 7.38a1.556 1.556 0 0 0 0 2.2l7.38 7.38a1.556 1.556 0 0 0 2.2 0l.011-.011a1.556 1.556 0 0 0 0-2.2L9.04 16.654a.933.933 0 0 1 0-1.32l5.61-5.609a1.556 1.556 0 0 0 .001-2.2m2.57-.006l.011-.011a1.556 1.556 0 0 1 2.2 0l7.38 7.38a1.556 1.556 0 0 1 0 2.2l-7.38 7.38a1.556 1.556 0 0 1-2.2 0l-.011-.011a1.556 1.556 0 0 1 0-2.2l5.611-5.609a.933.933 0 0 0 0-1.32l-5.611-5.609a1.556 1.556 0 0 1 0-2.2");
}
</style><circle class="lmh4whbrs"/><path class="t0m9q0h_t"/>`,
		"fallback": "vscode-icons:file-type-codekit",
	});
}

export default Component;
