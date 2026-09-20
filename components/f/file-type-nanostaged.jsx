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
		"content": `<style>.f9m40j_-x {
  fill: var(--svg-color--fff, #fff);
  d: path("M14 18a.28.28 0 0 0-.28 0l-2.7 1.5a.278.278 0 0 1-.42-.24v-10c0-.22.23-.35.42-.24l7.5 4.4c.087.05.19.05.28 0l2.7-1.5c.19-.11.42.027.42.24v10c0 .22-.23.35-.42.24z");
}

.lmh4whbrs {
  cx: 16px;
  cy: 16px;
  r: 14px;
}
</style><circle class="lmh4whbrs"/><path class="f9m40j_-x"/>`,
		"fallback": "vscode-icons:file-type-nanostaged",
	});
}

export default Component;
