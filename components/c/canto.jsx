import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.klr2g0esj {
  fill: var(--svg-color--74f8a2, #74f8a2);
  d: path("M6.536 3h14.142v18H6.536v-3.214H3.32V6.214h3.215zm10.928 3.214H9.75V9.43H6.536v5.143H9.75v3.214h7.714V14.57H9.75V9.43h7.714z");
}
</style><path class="klr2g0esj"/>`,
		"fallback": "token-branded:canto",
	});
}

export default Component;
