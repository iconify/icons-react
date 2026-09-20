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
		"content": `<style>.svfm8utzi {
  fill: currentColor;
  d: path("M3.75 17a.75.75 0 0 1 .743.648l.007.102v1.5a.75.75 0 0 1-1.493.102L3 19.25v-1.5a.75.75 0 0 1 .75-.75m8-6a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.102L11 19.25v-7.5a.75.75 0 0 1 .75-.75m4-3a.75.75 0 0 1 .743.648l.007.102v10.5a.75.75 0 0 1-1.493.102L15 19.25V8.75a.75.75 0 0 1 .75-.75m3.993-3a.75.75 0 0 1 .75.64l.007.102v13.501a.75.75 0 0 1-1.492.116L19 19.258V5.757A.75.75 0 0 1 19.743 5M7.75 14a.75.75 0 0 1 .743.648l.007.102v4.499a.75.75 0 0 1-1.493.102L7 19.249V14.75a.75.75 0 0 1 .75-.75");
}
</style><path class="svfm8utzi"/>`,
		"fallback": "fluent:cellular-data-1-24-regular",
	});
}

export default Component;
