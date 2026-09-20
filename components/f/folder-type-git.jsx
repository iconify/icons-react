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
		"content": `<style>.e7_mrfzir {
  fill: var(--svg-color--fff, #fff);
  d: path("m17.619 12.3l2.415 2.415a1.606 1.606 0 0 1 2.034 2.047l2.332 2.329a1.607 1.607 0 1 1-.964.907l-2.176-2.171v5.713a1.606 1.606 0 1 1-1.323-.047v-5.766a1.61 1.61 0 0 1-.873-2.11l-2.381-2.381");
}

.pp_s_unun {
  fill: var(--svg-color--dd4c35, #dd4c35);
  d: path("M30.6 19.565L21.435 10.4a1.35 1.35 0 0 0-1.913 0l-1.9 1.9l2.415 2.415a1.606 1.606 0 0 1 2.034 2.047l2.329 2.329a1.607 1.607 0 1 1-.964.907l-2.176-2.171v5.713a1.606 1.606 0 1 1-1.323-.047v-5.766a1.61 1.61 0 0 1-.873-2.11l-2.381-2.381l-6.283 6.286a1.353 1.353 0 0 0 0 1.913l9.165 9.165a1.353 1.353 0 0 0 1.913 0l9.122-9.122a1.353 1.353 0 0 0 0-1.913");
}

.q6w07mpfu {
  fill: var(--svg-color--bf5e55, #bf5e55);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z");
}
</style><path class="q6w07mpfu"/><path class="pp_s_unun"/><path class="e7_mrfzir"/>`,
		"fallback": "vscode-icons:folder-type-git",
	});
}

export default Component;
