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
		"content": `<style>.yknezbcom {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M16.75 7.75h2.125q3.375 0 3.375 3.375v6.75q0 3.375-3.375 3.375H5.125q-3.375 0-3.375-3.375v-6.75q0-1.398.989-2.386q.988-.989 2.386-.989H7.25V6.5q0-2.75 2.75-2.75h4q2.75 0 2.75 2.75zm-8 0V6.5q0-1.25 1.25-1.25h4q1.25 0 1.25 1.25v1.25zm2.5 3.5V8.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146V12q0 .074.014.146q.015.073.043.141t.069.13t.094.113q.052.053.113.094t.13.069t.141.043t.146.014h3q.074 0 .146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146V8.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014t-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146v2.75z");
}
</style><path class="yknezbcom"/>`,
		"fallback": "uix-solid:art-portfolio",
	});
}

export default Component;
