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
		"content": `<style>.gq05sxucd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.25 6v.25h-7.5q-.828 0-1.414.586T1.75 8.25q0 2 2 2h1.5v1.012q-.772.078-1.341.647q-.659.659-.659 1.591V18q0 2.25 2.25 2.25h1q2.25 0 2.25-2.25v-4.5q0-2.121-2-2.243V10.25h10.5v1.007q-2 .122-2 2.243V18q0 2.25 2.25 2.25h1q2.25 0 2.25-2.25v-4.5q0-2.121-2-2.243V10.25h1.5q2 0 2-2t-2-2h-6.405q.905-.673.905-2.25q0-2.75-2.75-2.75q-1.375 0-2.062.688Q9.25 2.625 9.25 4q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014t.146-.014q.073-.015.141-.043t.13-.069t.113-.094q.053-.052.094-.113t.069-.13t.043-.141T10.75 4q0-.625.313-.937q.312-.313.937-.313q1.25 0 1.25 1.25T12 5.25q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.094q-.053.052-.094.113t-.069.13t-.043.141T11.25 6");
}
</style><path class="gq05sxucd"/>`,
		"fallback": "uix-solid:hanger-clips",
	});
}

export default Component;
