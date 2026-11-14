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
		"content": `<style>.pi4tpjqaa {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.907 7.907Q3.75 12.064 3.75 19.5q0 .074.014.146q.015.073.043.141t.069.13q.041.061.094.113q.052.053.113.094t.13.069t.141.043t.146.014q7.436 0 11.593-4.157T20.25 4.5q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13q-.041-.061-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043t-.146-.014q-7.436 0-11.593 4.157");
}
</style><path class="pi4tpjqaa"/>`,
		"fallback": "uix-solid:football-american",
	});
}

export default Component;
