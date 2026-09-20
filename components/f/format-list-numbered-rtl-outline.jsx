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
		"content": `<style>.ck6h71bpg {
  fill: currentColor;
  d: path("M16.616 21v-.885h2.5V18.75h-1.5v-.885h1.5V16.5h-2.5v-.885h2.692q.294 0 .493.2t.199.493v1.384q0 .295-.199.494t-.493.199q.294 0 .493.199t.199.493v1.23q0 .295-.199.494t-.493.199zm0-6.308V12.25q0-.294.199-.493t.493-.2h1.808v-1.365h-2.5v-.884h2.692q.294 0 .493.199T20 10v1.75q0 .294-.199.493t-.493.2H17.5v1.365H20v.884zm1.5-6.308v-4.5h-1.5V3H19v5.385zM4 18.5v-1h10.385v1zm0-6v-1h10.385v1zm0-6v-1h10.385v1z");
}
</style><path class="ck6h71bpg"/>`,
		"fallback": "material-symbols-light:format-list-numbered-rtl-outline",
	});
}

export default Component;
