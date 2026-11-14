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
		"content": `<style>.uew47crkj {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.17 5.57l4.758-2.219q1.926-.897 2.824 1.028q.372.798.071 1.625q-.301.828-1.099 1.2l-4.758 2.218q-1.926.897-2.824-1.028T14.17 5.57M2.5 21.25h19q.074 0 .146-.014q.073-.015.141-.043t.13-.069q.061-.041.113-.094q.053-.052.094-.113t.069-.13t.043-.141t.014-.146q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014h-5.25V12.5q0-.115-.034-.224t-.1-.203q-.065-.094-.155-.165q-.09-.07-.198-.11q-.139-.053-.288-.048q-.15.005-.285.067q-.136.062-.238.171t-.154.249Q11.98 19.75 2.5 19.75q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141t-.014.146t.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014m12.25-1.5v-4.101q-1.787 2.702-4.702 4.101z");
}
</style><path class="uew47crkj"/>`,
		"fallback": "uix-solid:big-air-ramp",
	});
}

export default Component;
