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
		"content": `<style>.rcgplbbgh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 11q0-3.417 2.416-5.834T10 2.75t5.834 2.416Q18.25 7.583 18.25 11q0 2.523-1.317 4.5h3.317q.1 0 .197.026q.097.027.183.078q.087.05.157.122t.119.16l1.25 2.25q.094.17.094.364q0 .074-.014.146q-.015.073-.043.141t-.069.13q-.041.061-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014H10q-3.417 0-5.834-2.416T1.75 11m4.5 0q0-3.75 3.75-3.75T13.75 11T10 14.75T6.25 11m8.514 6.75h5.461l-.416-.75h-4.146q-.434.413-.899.75");
}
</style><path class="rcgplbbgh"/>`,
		"fallback": "uix-solid:grafting-tape",
	});
}

export default Component;
