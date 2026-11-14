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
		"content": `<style>.w-d5r1b1l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.458 7.217q-.716.533-.958.533q-.246 0-.998-1.004Q8.633 4.25 6.5 4.25q-4.75 0-4.75 7.75t4.75 7.75q2.116 0 3.986-2.318q.751-.932 1.014-.932q.396 0 1.279.635Q14.677 18.5 16.5 18.5q5.75 0 5.75-6.25q0-2.749-1.553-4.579Q19.067 5.75 16.5 5.75q-2.072 0-4.042 1.467M6.51 11.25q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141q.014.072.014.146t-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H6.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141T5.75 12t.014-.146q.015-.073.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043t.146-.014z");
}
</style><path class="w-d5r1b1l"/>`,
		"fallback": "uix-solid:blob-two",
	});
}

export default Component;
