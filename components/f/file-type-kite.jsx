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
		"content": `<style>.icf6k-vie {
  fill: var(--svg-color--acb1da, #acb1da);
  d: path("m16.235 13.059l-4.525 8.516L21.575 30l3.249-12.561z");
}

.jn3u7ub4z {
  fill: var(--svg-color--acb1da, #acb1da);
  d: path("m12.751 2l-7.81 13.792l5.991 5.113l4.996-8.824l9.158 4.362l1.973-7.629z");
}
</style><path class="icf6k-vie"/><path class="jn3u7ub4z"/>`,
		"fallback": "vscode-icons:file-type-kite",
	});
}

export default Component;
