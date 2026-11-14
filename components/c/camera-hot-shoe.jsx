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
		"content": `<style>.od81vcbwr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.541 11.75h2.334q3.375 0 3.375 3.375v1.75q0 3.375-3.375 3.375H5.125q-3.375 0-3.375-3.375v-1.75q0-1.398.989-2.386q.988-.989 2.386-.989h2.334L5.288 5.237q-.023-.07-.032-.143t-.004-.147t.025-.145t.052-.137t.079-.125q.045-.058.101-.107q.055-.048.12-.085q.064-.036.134-.06q.115-.038.237-.038h12q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 .122-.038.237zm-9.5-6l2 6h5.918l2-6zm4.969 2.5H12q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T11.25 9t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h.01q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141T12.76 9t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014");
}
</style><path class="od81vcbwr"/>`,
		"fallback": "uix-solid:camera-hot-shoe",
	});
}

export default Component;
