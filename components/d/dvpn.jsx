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
		"content": `<style>.a12wmjbea {
  fill: var(--svg-color--07b3f5, #07b3f5);
  fill-rule: evenodd;
  d: path("M20.4 3.054H3.6v8.67c0 4.525 3.762 9.223 8.4 9.223s8.4-4.698 8.4-9.223zm-.6.546H4.2v8.136c0 4.26 3.492 8.665 7.8 8.665s7.8-4.41 7.8-8.664z");
}

.fd-tc4biz {
  fill: var(--svg-color--07b3f5, #07b3f5);
  d: path("M18 5.4H6v3.34l9.425 6.522l-.671.57L6 9.935v1.86c0 3.342 2.688 6.804 6 6.804c3.288 0 5.958-3.408 6-6.725L9.76 6.239h1.585L18 10.866z");
}

.ft5dv1b6b {
  fill: none;
}

.vdbitobaf {
  fill: var(--svg-color--162c51, #162c51);
  d: path("M3.6 3h16.8v8.718C20.4 16.278 16.638 21 12 21s-8.4-4.722-8.4-9.282z");
}
</style><g class="ft5dv1b6b"><path class="vdbitobaf"/><path clip-rule="evenodd" class="a12wmjbea"/><path class="fd-tc4biz"/></g>`,
		"fallback": "token-branded:dvpn",
	});
}

export default Component;
