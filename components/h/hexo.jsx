import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":295};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c5i_hkebq {
  fill: var(--svg-color--0e83cd, #0e83cd);
  d: path("M128.04 0L.574 73.768L.59 221.079l127.754 73.465l127.464-73.769l.002-147.23z");
}

.typqxjoih {
  fill: var(--svg-color--fff, #fff);
  d: path("m68.242 211.051l.01-63.7l.01-63.702l11.573-6.768l11.085 6.56l.12 26.03l.12 26.031h74.075l.12-26.013l.12-26.014l11.257-6.505l11.412 6.68l-.006 63.658l-.005 63.659l-11.298 6.31l-11.361-6.392l-.12-25.885l-.12-25.886H91.16l-.12 25.878l.034 26.008l-11.36 6.663z");
}
</style><path class="c5i_hkebq"/><path class="typqxjoih"/>`,
		"fallback": "logos:hexo",
	});
}

export default Component;
