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
		"content": `<style>.mdiaoebml {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.267 17.293L12 15.561l2.97 2.969q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094l6-6q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113l-6-6q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069t-.113.094L12 8.439l-1.733-1.733Q8.5 4.941 6.733 6.707l-3.526 3.526h-.001Q1.441 12 3.207 13.767l3.526 3.527q1.767 1.765 3.534-.001m3.526-7.06l-.732-.733L15.5 7.061L20.439 12L15.5 16.939L13.061 14.5l.733-.733q1.765-1.767-.001-3.534");
}
</style><path class="mdiaoebml"/>`,
		"fallback": "uix-solid:barfi",
	});
}

export default Component;
