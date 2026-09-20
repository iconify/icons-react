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
		"content": `<style>.ha_egpb4c {
  fill: currentColor;
  d: path("M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112zM14 15.35v-6.7L8.75 12z");
}
</style><path class="ha_egpb4c"/>`,
		"fallback": "material-symbols:arrow-back-2-outline-rounded",
	});
}

export default Component;
