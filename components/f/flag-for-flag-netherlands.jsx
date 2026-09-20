import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.v6gs1lb1o {
  fill: var(--svg-color--ae1f28, #ae1f28);
  d: path("M32 5H4a4 4 0 0 0-4 4v5h36V9a4 4 0 0 0-4-4");
}

.zut58gbmm {
  fill: var(--svg-color--eee, #eee);
  d: path("M0 14h36v8H0z");
}

.zzx6o_bqa {
  fill: var(--svg-color--20478b, #20478b);
  d: path("M4 31h28a4 4 0 0 0 4-4v-5H0v5a4 4 0 0 0 4 4");
}
</style><path class="zut58gbmm"/><path class="v6gs1lb1o"/><path class="zzx6o_bqa"/>`,
		"fallback": "twemoji:flag-for-flag-netherlands",
	});
}

export default Component;
