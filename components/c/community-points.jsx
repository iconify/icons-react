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
		"content": `<style>.ws4nyjbgk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.752 4.752Q1.75 7.754 1.75 12t3.002 7.248T12 22.25t7.248-3.002T22.25 12t-3.002-7.248T12 1.75T4.752 4.752m8.573 3.604l.283.735q.171.445.647.479l.798.057q.98.071 1.277 1.006q.296.936-.463 1.558l-.612.501q-.39.32-.241.801l.203.662q.28.914-.486 1.485q-.766.57-1.561.042l-.754-.503q-.416-.277-.832 0l-.753.502q-.796.529-1.562-.041t-.486-1.485l.203-.661q.149-.482-.241-.802l-.612-.501q-.759-.622-.463-1.558q.297-.935 1.276-1.006l.8-.057q.475-.034.646-.479l.283-.735q.351-.91 1.325-.91t1.325.909z");
}
</style><path class="ws4nyjbgk"/>`,
		"fallback": "uix-solid:community-points",
	});
}

export default Component;
