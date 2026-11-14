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
		"content": `<style>.l3rrwqbyf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m9.966 5.782l.003.001l6.509 1.928q2.073-.686 3.916.58q1.952 1.34 1.952 3.709t-1.952 3.709q-1.843 1.266-3.916.58l-6.515 1.93q-3.127.954-5.758-.995T1.573 12q0-3.275 2.632-5.224q2.63-1.948 5.761-.994M8 8.75q-3.25 0-3.25 3.25T8 15.25q1.346 0 2.298-.952T11.25 12t-.952-2.298T8 8.75m9.76 2.5h-.01q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T17 12t.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h.01q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141q.014-.072.014-.146t-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014");
}
</style><path class="l3rrwqbyf"/>`,
		"fallback": "uix-solid:belt-drive",
	});
}

export default Component;
