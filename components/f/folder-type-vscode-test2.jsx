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
		"content": `<style>.bv--vibkw {
  fill: var(--svg-color--b70b0b, #b70b0b);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z");
}

.djo5oac6k {
  fill: var(--svg-color--007acc, #007acc);
  d: path("m17.187 22.516l-5.167 3.892l-2.131-.708l5.255-5.2l-5.255-5.2l2.13-.711l5.167 3.892L25.77 10l5.14 2.183v16.633L25.77 31Zm2.678-2.016l5.9 4.447v-8.894Z");
}
</style><path class="bv--vibkw"/><path class="djo5oac6k"/>`,
		"fallback": "vscode-icons:folder-type-vscode-test2",
	});
}

export default Component;
