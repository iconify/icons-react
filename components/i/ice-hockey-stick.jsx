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
		"content": `<style>.keyk36bmf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M9.838 14.75H5q-3.25 0-3.25 2.75q0 1.75 1.75 1.75h5.25q.104 0 .205-.029q.1-.028.189-.083t.16-.132t.117-.171l1.483-2.965l8.229-12.968q.08-.126.106-.273t-.007-.293t-.118-.267q-.086-.122-.212-.202q-.063-.04-.131-.066q-.069-.027-.142-.04t-.147-.011t-.146.018t-.139.046q-.068.03-.128.072q-.061.043-.112.096t-.09.116zm11.162 6H3q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014h18q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T21 20.75");
}
</style><path class="keyk36bmf"/>`,
		"fallback": "uix-solid:ice-hockey-stick",
	});
}

export default Component;
