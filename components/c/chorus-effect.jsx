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
		"content": `<style>.kcyxx_bwk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M19.75 8.938V3q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v8.5q0 2.75-2.75 2.75t-2.75-2.75t2.75-2.75q.719 0 1.25.188m-7 4V9q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146v6.5q0 2.75-2.75 2.75T8.75 15.5t2.75-2.75q.719 0 1.25.188m-7 4V13q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v6.5q0 2.75-2.75 2.75T1.75 19.5t2.75-2.75q.719 0 1.25.188");
}
</style><path class="kcyxx_bwk"/>`,
		"fallback": "uix-solid:chorus-effect",
	});
}

export default Component;
