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
		"content": `<style>.ogjnznyrv {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.75 7.25h1.75q1.76 0 3.005 1.245T21.75 11.5v2q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T21 12.75H3q-.074 0-.146.014q-.073.015-.141.043t-.13.069t-.113.093t-.093.114q-.041.061-.07.13q-.028.068-.043.14t-.014.146V11.5q0-1.76 1.245-3.005T6.5 7.25h1.75V6q0-2.25 2.25-2.25h3q2.25 0 2.25 2.25zm-3.75 7H3q-.074 0-.146-.014q-.073-.015-.141-.043t-.13-.069t-.113-.093t-.093-.114q-.041-.061-.07-.13q-.028-.068-.043-.14t-.014-.146V17q0 1.76 1.245 3.005T6.5 21.25h11q1.76 0 3.005-1.245T21.75 17v-3.5q0 .074-.014.146q-.015.073-.043.141t-.069.13t-.094.113q-.052.053-.113.094t-.13.069t-.141.043t-.146.014zm-2.25-7h4.5V6q0-.75-.75-.75h-3q-.75 0-.75.75z");
}
</style><path class="ogjnznyrv"/>`,
		"fallback": "uix-solid:business-studies",
	});
}

export default Component;
