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
		"content": `<style>.ysjoz0w6y {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 2.5v1.25h6.5V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v1.25h.75q1.76 0 3.005 1.245T21.75 8v10q0 1.76-1.245 3.005T17.5 22.25h-11q-1.76 0-3.005-1.245T2.25 18V8q0-1.76 1.245-3.005T6.5 3.75h.75V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043Q7.926 1.75 8 1.75t.146.014t.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146m5.5 9.75q-2.5 0-2.5 2.5v1q0 2.5 2.5 2.5h1.5q2.5 0 2.5-2.5v-1q0-2.5-2.5-2.5z");
}
</style><path class="ysjoz0w6y"/>`,
		"fallback": "uix-solid:booking-calendar",
	});
}

export default Component;
