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
		"content": `<style>.ppfmyrb5n {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 2.25Q2.25 2.25 2.25 5T5 7.75q2.345 0 2.69-2h4.62q.345 2 2.69 2q2.75 0 2.75-2.75T15 2.25q-2.345 0-2.69 2H7.69q-.345-2-2.69-2m4 7q-2.75 0-2.75 2.75T9 14.75q2.345 0 2.69-2h5.12q.345 2 2.69 2q2.75 0 2.75-2.75T19.5 9.25q-2.345 0-2.69 2h-5.12q-.345-2-2.69-2m-4.5 7q-2.75 0-2.75 2.75t2.75 2.75q2.345 0 2.69-2h7.12q.345 2 2.69 2q2.75 0 2.75-2.75T17 16.25q-2.345 0-2.69 2H7.19q-.345-2-2.69-2");
}
</style><path class="ppfmyrb5n"/>`,
		"fallback": "uix-solid:chart-dumbbell",
	});
}

export default Component;
