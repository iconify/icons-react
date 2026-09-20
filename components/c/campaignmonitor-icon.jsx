import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":174};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hjrzu3blq {
  fill: var(--svg-color--7856ff, #7856ff);
  d: path("M254.234 4.152a9.725 9.725 0 0 0-13.565-2.381L1.737 169.047a9.7 9.7 0 0 0 7.968 4.148l.01.01h236.55c5.379 0 9.735-4.366 9.735-9.745V9.57a9.73 9.73 0 0 0-1.766-5.437M15.312 1.76A9.735 9.735 0 0 0 0 9.57v154.177l113.75-93.18L15.321 1.742");
}
</style><path class="hjrzu3blq"/>`,
		"fallback": "logos:campaignmonitor-icon",
	});
}

export default Component;
