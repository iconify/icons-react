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
		"content": `<style>.ouxu3mbkp {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.5 9.25h-1.25v3h2.5v-3zm-.75-3.75v2.25H14.5q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146v3.75H2.5q-.162 0-.31.067q-.136.062-.238.171t-.154.249q-.053.139-.048.288q.005.15.067.285l2.5 5.5q.045.099.116.18q.07.082.161.141t.194.089t.212.03h14.5q.115 0 .226-.035q.11-.034.204-.101q.095-.066.165-.158q.07-.091.11-.2l2-5.5q.045-.124.045-.256q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-2.25V8.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-1.25V5.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146");
}
</style><path class="ouxu3mbkp"/>`,
		"fallback": "uix-solid:aircraft-carrier",
	});
}

export default Component;
