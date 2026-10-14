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
		"content": `<style>.njemojbzm {
  fill: var(--svg-color--dedede, #dedede);
  stroke: var(--svg-color--000, #000);
  stroke-width: var(--svg-stroke-width--2-032px, 2.032px);
  d: path("m21.91 13.73l5.86 3.38v6.78l-5.86 3.38l-5.87-3.38v-6.78z");
}

.q4pgz8b8l {
  fill: var(--svg-color--dedede, #dedede);
  d: path("M21.91 10L31 15.25v10.5L21.91 31l-9.09-5.25v-10.5z");
}

.xjldibcjr {
  fill: var(--svg-color--a5a5a5, #a5a5a5);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21zm0 4.2h-8.2l1.1-2.1h7.1z");
}
</style><path class="xjldibcjr"/><path class="q4pgz8b8l"/><path class="njemojbzm"/>`,
		"fallback": "vscode-icons:folder-type-skill",
	});
}

export default Component;
