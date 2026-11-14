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
		"content": `<style>.pjus7ebch {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.75 9.75V21.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146v-4.25H6q-.149 0-.287-.057t-.243-.163l-2.5-2.5q-.106-.105-.163-.243T2.75 14t.057-.287t.163-.243l2.5-2.5q.105-.106.243-.163T6 10.75h5.25V2.5q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141t.014.146v.75H18q.149 0 .287.057t.243.163l2.5 2.5q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113l-2.5 2.5q-.105.106-.243.163T18 9.75zm0-1.5h4.939l1.75-1.75l-1.75-1.75H12.75zm-6.439 4L4.561 14l1.75 1.75h4.939v-3.5z");
}
</style><path class="pjus7ebch"/>`,
		"fallback": "uix-solid:direction-signpost",
	});
}

export default Component;
