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
		"content": `<style>.py6wv26yr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.25 6v2.75h13.5V6q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v2.796q.719.138 1.268.686q.732.732.732 1.768v1q0 .991-.671 1.704q.671.688.671 2.046q0 2.75-2.75 2.75q-1.314 0-2-.628q-.686.628-2 .628q-2.75 0-2.75-2.75q0-.719.188-1.25h-1.876q.188.531.188 1.25q0 2.75-2.75 2.75q-1.314 0-2-.628q-.686.628-2 .628q-2.75 0-2.75-2.75q0-1.251.569-1.933q-.569-.624-.569-1.817v-1q0-1.036.732-1.768q.549-.548 1.268-.686V6q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141T5.25 6");
}
</style><path class="py6wv26yr"/>`,
		"fallback": "uix-solid:chassis-trailer",
	});
}

export default Component;
