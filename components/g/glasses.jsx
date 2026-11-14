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
		"content": `<style>.gs_r_ybwg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 14V9q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069t.113.094q.053.052.094.113t.069.13t.043.141q.014.072.014.146v1.535Q4.609 9.25 6.5 9.25q1.968 0 3.359 1.391q.554.555.888 1.2q1.253-.773 2.506 0q.334-.645.888-1.2Q15.532 9.25 17.5 9.25q1.891 0 3.25 1.285V9q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014t.146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146v5q0 1.968-1.391 3.359T17.5 18.75t-3.359-1.391T12.75 14q0-.325.038-.634q-.788-.641-1.576 0q.038.309.038.634q0 1.968-1.391 3.359T6.5 18.75t-3.359-1.391T1.75 14");
}
</style><path class="gs_r_ybwg"/>`,
		"fallback": "uix-solid:glasses",
	});
}

export default Component;
