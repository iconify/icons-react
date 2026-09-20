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
		"content": `<style>.c1po76b7o {
  fill: var(--svg-color--007a3d, #007a3d);
  d: path("M4 31h28a4 4 0 0 0 4-4v-4.667L2.067 30.502A4 4 0 0 0 4 31");
}

.l4k8bu2kf {
  fill: var(--svg-color--003f87, #003f87);
  d: path("M12 5H4a4 4 0 0 0-4 4v18c0 .878.283 1.689.762 2.349z");
}

.nncu9p6ec {
  fill: var(--svg-color--fcd856, #fcd856);
  d: path("M.763 29.35q.168.231.367.435L24.167 5H12zq-.002-.002 0 0");
}

.r0xjpyiqo {
  fill: var(--svg-color--d62828, #d62828);
  d: path("M32 5h-7.833L1.129 29.785l.001.001q.228.236.493.431l.001.001L36 13.667V9a4 4 0 0 0-4-4");
}

.zibvw_0ss {
  fill: var(--svg-color--eee, #eee);
  d: path("m2.063 30.501l.004.002L36 22.333v-8.667L1.624 30.218q.21.155.439.283");
}
</style><path class="r0xjpyiqo"/><path class="nncu9p6ec"/><path class="l4k8bu2kf"/><path class="zibvw_0ss"/><path class="c1po76b7o"/>`,
		"fallback": "twemoji:flag-seychelles",
	});
}

export default Component;
