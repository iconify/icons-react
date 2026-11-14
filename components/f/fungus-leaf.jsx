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
		"content": `<style>.twjqayb1r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.75 20.5q0-8.186 4.782-12.968T20.5 2.75q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 8.186-4.782 12.968T3.5 21.25q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146M11.5 9.501q0 1.035.732 1.767q.732.733 1.768.733t1.768-.733q.733-.732.732-1.769q.001-1.035-.732-1.767q-.732-.733-1.768-.733t-1.768.733q-.732.732-.732 1.767zm-2 1.999Q7 11.5 7 14t2.5 2.5T12 14t-2.5-2.5");
}
</style><path class="twjqayb1r"/>`,
		"fallback": "uix-solid:fungus-leaf",
	});
}

export default Component;
