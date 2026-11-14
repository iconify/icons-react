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
		"content": `<style>.mwzy34z0y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.625 1.25H6.375q-2.123 0-3.624 1.501T1.25 6.375v6.25q0 2.123 1.501 3.624t3.624 1.501h4.875V22q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146v-4.25h4.875q2.123 0 3.624-1.501t1.501-3.624v-6.25q0-2.123-1.501-3.624T17.625 1.25");
}
</style><path class="mwzy34z0y"/>`,
		"fallback": "uix-solid:dead-end-sign",
	});
}

export default Component;
