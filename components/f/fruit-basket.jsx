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
		"content": `<style>.c9wpyeh7j {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.995 4.995Q3.75 6.24 3.75 8t1.245 3.005q.129.129.264.245H3q-.092 0-.182.022q-.145.037-.264.125q-.12.089-.197.217t-.099.276t.014.292l1.75 7q.517 2.068 2.728 2.068h10.5q2.211 0 2.728-2.068l1.75-7q.022-.09.022-.182q0-.074-.014-.146q-.015-.073-.043-.141t-.069-.13t-.094-.113q-.052-.053-.113-.094t-.13-.069t-.141-.043T21 11.25h-2.259q.135-.116.264-.245Q20.25 9.76 20.25 8t-1.245-3.005T16 3.75t-3.005 1.245q-.687.687-.995 1.531q-.308-.844-.995-1.531Q9.76 3.75 8 3.75T4.995 4.995M12 9.474q-.308.844-.995 1.531q-.129.129-.264.245h2.518q-.135-.116-.264-.245q-.687-.687-.995-1.531");
}
</style><path class="c9wpyeh7j"/>`,
		"fallback": "uix-solid:fruit-basket",
	});
}

export default Component;
