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
		"content": `<style>.r86_2mbmo {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 5.75q1.25 0 1.25-1.25T12 3.25T10.75 4.5q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T10 5.25t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T9.25 4.5q0-2.75 2.75-2.75t2.75 2.75q0 2.381-2.062 2.701q.062.143.062.299v.159q0 .48.376.78l3.093 2.476q1.346 1.078.775 2.706q-.023.066-.048.129h.554q2.75 0 2.75 2.75t-2.75 2.75h-11q-2.75 0-2.75-2.75t2.75-2.75h.554q-.025-.063-.048-.129q-.571-1.628.775-2.707l3.094-2.475q.375-.3.375-.78V7.5q0-.138.049-.268q.05-.129.142-.232q-.092-.103-.142-.232q-.049-.13-.049-.268q0-.074.014-.146q.015-.073.043-.141t.069-.13q.041-.061.094-.113q.052-.053.113-.094t.13-.069t.141-.043T12 5.75");
}
</style><path class="r86_2mbmo"/>`,
		"fallback": "uix-solid:hanger-wooden",
	});
}

export default Component;
