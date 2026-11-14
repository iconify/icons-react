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
		"content": `<style>.qu_a--yjf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m2.97 8.97l6-6q.105-.106.243-.163T9.5 2.75h11q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v17q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-17q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-11q0-.149.057-.287t.163-.243");
}
</style><path class="qu_a--yjf"/>`,
		"fallback": "uix-solid:corner-bevel",
	});
}

export default Component;
