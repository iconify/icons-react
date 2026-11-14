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
		"content": `<style>.z92cnc4uq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.03 5.03L6.749 7.312q5.413.395 8.688 3.316Q19.25 14.029 19.25 20q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T17.75 20q0-10.389-10.873-11.184L9.03 10.97q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094l-3.5-3.499V8.53q-.099-.098-.155-.225q-.057-.127-.064-.266L4.25 8q0-.149.057-.287t.163-.243l3.5-3.5q.105-.106.243-.163T8.5 3.75t.287.057t.243.163q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113");
}
</style><path class="z92cnc4uq"/>`,
		"fallback": "uix-solid:arrow-curve-left",
	});
}

export default Component;
