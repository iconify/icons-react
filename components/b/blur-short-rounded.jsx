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
		"content": `<style>.l_7jrcbzv {
  fill: currentColor;
  d: path("M17.125 14.125Q18 13.25 18 12t-.875-2.125T15 9t-2.125.875T12 12t.875 2.125T15 15t2.125-.875M15 17q-1.8 0-3.175-1.125T10.1 13H7q-.425 0-.712-.288T6 12t.288-.712T7 11h3.1q.125-.55.338-1.062T11 9H5q-.425 0-.712-.288T4 8t.288-.712T5 7h10q2.075 0 3.538 1.463T20 12t-1.463 3.538T15 17");
}
</style><path class="l_7jrcbzv"/>`,
		"fallback": "material-symbols:blur-short-rounded",
	});
}

export default Component;
