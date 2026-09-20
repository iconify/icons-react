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
		"content": `<style>.tbp_fab_r {
  fill: currentColor;
  d: path("M21 5v10.73q0 1.368-.973 2.329q-.973.96-2.354.96H6.327q-1.406 0-2.366-.96Q3 17.098 3 15.73V5zm-8.454 10.116l2.254.005q.992 0 1.587-.474q.594-.474.594-1.308q0-.63-.35-.978t-1.012-.486v-.044q.564-.117.848-.482t.285-.945q0-.82-.58-1.16q-.581-.34-1.716-.34h-1.91zm.856-3.6V9.683h1.033q.742 0 1.098.207t.356.706q0 .494-.347.713q-.346.218-1.03.212zm0 2.82v-2.07h1.246q.693 0 1.066.262t.373.782q0 .494-.355.76t-1.028.266zm-6.279.78h3.796v-.827H7.98V8.904h-.856z");
}
</style><path class="tbp_fab_r"/>`,
		"fallback": "material-symbols-light:game-bumper-left-sharp",
	});
}

export default Component;
