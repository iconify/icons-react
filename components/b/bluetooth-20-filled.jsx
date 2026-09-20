import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.db186tldr {
  fill: currentColor;
  d: path("M9.463 2.057a.75.75 0 0 1 .817.163l4 4a.75.75 0 0 1-.057 1.112L10.939 10l3.284 2.668a.75.75 0 0 1 .057 1.112l-4 4A.75.75 0 0 1 9 17.25v-5.674l-2.777 2.256a.75.75 0 0 1-.946-1.164L8.561 10L5.277 7.332a.75.75 0 1 1 .946-1.164L9 8.424V2.75a.75.75 0 0 1 .463-.693m1.037 9.519v3.863l2.132-2.131zm0-3.152l2.132-1.732L10.5 4.561z");
}
</style><path class="db186tldr"/>`,
		"fallback": "fluent:bluetooth-20-filled",
	});
}

export default Component;
