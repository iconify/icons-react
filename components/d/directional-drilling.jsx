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
		"content": `<style>.q0cu1sb-j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 2.75H2q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141q-.014.072-.014.146t.014.146t.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043T2 4.25h3.25V14q0 1.968 1.391 3.359T10 18.75h4.75v.5q0 2 2 2q1.455 0 1.851-1.058q.735.17 1.381-.367l.115-.097q.809-.675.809-1.728t-.807-1.727l-.117-.098l-.002-.002q-.644-.535-1.379-.365q-.397-1.058-1.851-1.058q-2 0-2 2v.5H10q-3.25 0-3.25-3.25V4.25H10q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043Q10.074 2.75 10 2.75");
}
</style><path class="q0cu1sb-j"/>`,
		"fallback": "uix-solid:directional-drilling",
	});
}

export default Component;
