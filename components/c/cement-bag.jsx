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
		"content": `<style>.ohzv8fb7g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.798 6.236v.001q-.038.1-.046.208l-1 13.5q-.002.027-.002.055q0 2.25 2.25 2.25h12q2.25 0 2.25-2.25q0-.028-.002-.055l-1-13.5V6.44q-.009-.105-.046-.203l-1.5-4q-.04-.108-.11-.198t-.165-.155t-.203-.1T17 1.75H7q-.115 0-.224.034t-.203.1t-.165.155t-.11.198zm1.784-.486l.938-2.5h8.96l.938 2.5zm3.168 4.5h4.5q2.5 0 2.5 2.5v1.5q0 2.5-2.5 2.5h-4.5q-2.5 0-2.5-2.5v-1.5q0-2.5 2.5-2.5");
}
</style><path class="ohzv8fb7g"/>`,
		"fallback": "uix-solid:cement-bag",
	});
}

export default Component;
