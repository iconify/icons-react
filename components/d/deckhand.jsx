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
		"content": `<style>.jr2mfeo8w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.75 7q0-1.968 1.391-3.359T10.5 2.25t3.359 1.391T15.25 7t-1.391 3.359T10.5 11.75t-3.359-1.391T5.75 7m-1.032 7.923Q2.25 16.702 2.25 19.5q0 1.75 1.75 1.75h10.813Q14 20.043 14 18.5q0-2.957 2.498-3.416q-.105-.081-.216-.161q-2.32-1.673-5.782-1.673t-5.782 1.673M18.25 18.5q0-.75-.75-.75t-.75.75q0 2.25 2.25 2.25t2.25-2.25q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146q0 3.75-3.75 3.75t-3.75-3.75q0-2.25 2.25-2.25t2.25 2.25q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146");
}
</style><path class="jr2mfeo8w"/>`,
		"fallback": "uix-solid:deckhand",
	});
}

export default Component;
