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
		"content": `<style>.ch3shwhom {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 7q0-2.75 2.75-2.75h4.5q.149 0 .287.057t.243.163l1.781 1.78H19q2.75 0 2.75 2.75v8q0 2.75-2.75 2.75H5q-2.75 0-2.75-2.75zm10.5 8.5v-3.929l1.744.634q.069.025.142.036q.073.012.147.008q.074-.003.145-.021q.072-.017.139-.048q.067-.032.127-.075q.059-.044.109-.098t.088-.118q.039-.063.064-.133q.025-.069.036-.142q.012-.073.008-.147q-.003-.074-.021-.145q-.017-.072-.048-.139q-.032-.067-.075-.127q-.044-.059-.098-.109t-.118-.088q-.063-.039-.133-.064l-2.75-1Q12.132 9.75 12 9.75q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146v2.826q-.337-.076-.75-.076q-2.25 0-2.25 2.25t2.25 2.25t2.25-2.25");
}
</style><path class="ch3shwhom"/>`,
		"fallback": "uix-solid:folder-music",
	});
}

export default Component;
