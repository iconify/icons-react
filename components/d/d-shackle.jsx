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
		"content": `<style>.c046jxbxl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.81 4.75q.345-2 2.69-2t2.69 2h3.62q.345-2 2.69-2t2.69 2H21q.074 0 .146.014q.073.015.141.043t.13.069q.061.041.113.094q.053.052.094.113t.069.13t.043.141t.014.146t-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043T21 6.25h-1.81q-.285 1.655-1.94 1.94V15q0 2.175-1.538 3.712Q14.175 20.25 12 20.25t-3.712-1.538Q6.75 17.175 6.75 15V8.19q-1.655-.285-1.94-1.94H3q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.094q-.053-.052-.094-.113t-.069-.13t-.043-.141Q2.25 5.574 2.25 5.5t.014-.146t.043-.141t.069-.13t.094-.113q.052-.053.113-.094t.13-.069t.141-.043T3 4.75zm5.38 1.5q-.285 1.655-1.94 1.94V15q0 3.75 3.75 3.75T15.75 15V8.19q-1.655-.285-1.94-1.94z");
}
</style><path class="c046jxbxl"/>`,
		"fallback": "uix-solid:d-shackle",
	});
}

export default Component;
