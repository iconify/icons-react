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
		"content": `<style>.gks_vy-4w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.5 2.75q-3.831.001-6.539 2.71T1.253 12t2.708 6.54t6.539 2.71q.074 0 .146-.014q.073-.015.141-.043t.129-.069t.114-.093q.052-.053.093-.114q.042-.062.07-.13t.043-.14t.014-.147v-17q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043q-.072-.014-.146-.014m3 0q3.831.001 6.539 2.71T22.747 12t-2.708 6.54t-6.539 2.71q-.074 0-.146-.014q-.073-.015-.141-.043t-.129-.069t-.114-.093q-.052-.053-.093-.114q-.042-.062-.07-.13t-.043-.14t-.014-.147v-17q0-.074.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043q.072-.014.146-.014");
}
</style><path class="gks_vy-4w"/>`,
		"fallback": "uix-solid:halving",
	});
}

export default Component;
