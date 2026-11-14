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
		"content": `<style>.rqelvbcao {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.5 3.875q0-1.625-1.625-1.625T13.25 3.875v7.25q0 .063.004.125H6.496q.004-.062.004-.125v-5.25q0-1.625-1.625-1.625T3.25 5.875v5.25q0 .063.004.125H2.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h5.753q-.003.061-.003.125v4.25q0 .673.476 1.149t1.149.476t1.149-.476t.476-1.149v-4.25q0-.063-.004-.125h6.757q-.003.061-.003.125v6.25q0 1.625 1.625 1.625t1.625-1.625v-6.25q0-.064-.003-.125h.003q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-5.004q.004-.062.004-.125z");
}
</style><path class="rqelvbcao"/>`,
		"fallback": "uix-solid:chart-bar-negative",
	});
}

export default Component;
