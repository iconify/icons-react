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
		"content": `<style>.p9hiwnbss {
  fill: currentColor;
  d: path("M18.61 21q-.994 0-1.687-.695q-.692-.696-.692-1.69q0-.369.103-.694q.104-.325.293-.605L6.685 7.373q-.281.188-.606.292t-.695.104q-.993 0-1.689-.697Q3 6.377 3 5.38t.697-1.688T5.389 3t1.688.696q.692.695.692 1.689q0 .356-.094.688t-.283.611l9.924 9.924q.28-.189.612-.283t.688-.094q.993 0 1.689.697q.695.697.695 1.692t-.697 1.688t-1.692.692");
}
</style><path class="p9hiwnbss"/>`,
		"fallback": "material-symbols-light:diagonal-line",
	});
}

export default Component;
