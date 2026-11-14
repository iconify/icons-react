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
		"content": `<style>.d0mjs1bko {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5.625 2.75h6.75q2.74 0 3.256 2.224l.1-.038l2.5-.909q1.1-.4 2.06.272q.959.672.959 1.843v2.716q0 1.171-.959 1.843q-.96.672-2.06.272l-2.5-.909l-.1-.038q-.516 2.224-3.256 2.224H9.75v2.023l3.874 5.811q.041.061.069.13q.028.068.043.14t.014.147t-.015.146q-.014.073-.042.141t-.07.129t-.093.114q-.053.052-.114.093q-.124.083-.27.112t-.293-.001q-.146-.029-.27-.112t-.207-.207L9 15.852l-3.376 5.064q-.083.124-.207.207t-.27.112q-.146.03-.293.001q-.146-.029-.27-.112q-.061-.041-.114-.093q-.052-.052-.093-.114q-.041-.061-.07-.129q-.028-.068-.042-.141t-.015-.146t.014-.147q.015-.072.043-.14t.069-.13l3.874-5.811V12.25H5.625q-1.398 0-2.386-.989q-.989-.988-.989-2.386v-2.75q0-1.398.989-2.386q.988-.989 2.386-.989");
}
</style><path class="d0mjs1bko"/>`,
		"fallback": "uix-solid:conference-camera",
	});
}

export default Component;
