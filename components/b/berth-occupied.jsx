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
		"content": `<style>.iu21eyysj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21.5 8.25h-5.584l-2.28-3.647q-.051-.081-.12-.147t-.152-.112t-.176-.07T13 4.25H6q-.074 0-.146.014q-.073.015-.141.043t-.13.069q-.061.041-.113.094q-.053.052-.094.113t-.069.13t-.043.141T5.25 5v3.25H2.5q-.177 0-.335.079q-.134.067-.232.18q-.097.112-.145.254q-.047.141-.036.29q.01.149.077.282l3 6q.047.094.117.171t.16.132t.189.083q.101.029.205.029h8.813q.278-.412.651-.786Q16.429 13.5 18.5 13.5q.785 0 1.483.211l2.188-4.376q.079-.158.079-.335q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014m-7.353 0H6.75v-2.5h5.834zm.603 10.25q0-3.75 3.75-3.75t3.75 3.75t-3.75 3.75t-3.75-3.75m1.5 0q0 2.25 2.25 2.25t2.25-2.25t-2.25-2.25t-2.25 2.25");
}
</style><path class="iu21eyysj"/>`,
		"fallback": "uix-solid:berth-occupied",
	});
}

export default Component;
