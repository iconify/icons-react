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
		"content": `<style>.p-yi54bxj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.761 3.75h6.478q1.802 0 2.372 1.71l1.596 4.79q-.039-.11-.109-.203q-.07-.092-.165-.16q-.095-.067-.206-.102T18.5 9.75h-13q-.116 0-.227.035t-.206.102t-.165.16t-.109.203l1.596-4.79q.57-1.71 2.372-1.71m2.489 7.5H5.5q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069q-.061-.041-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146q0-.114.034-.224L2.556 16.96q-.404 1.214.344 2.252t2.028 1.038h14.144q1.28 0 2.028-1.038t.344-2.252l-2.228-6.684q.034.11.034.224q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014h-5.75v8.25q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014t-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141t-.014-.146z");
}
</style><path class="p-yi54bxj"/>`,
		"fallback": "uix-solid:concrete-floor",
	});
}

export default Component;
