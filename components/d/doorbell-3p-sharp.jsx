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
		"content": `<style>.zg4ez8rrr {
  fill: currentColor;
  d: path("M6 21V3h12v18zm6-2.5q.778 0 1.331-.553q.554-.554.554-1.331q0-.778-.554-1.331q-.553-.554-1.331-.554t-1.331.554t-.553 1.33t.553 1.332T12 18.5m0-.77q-.463 0-.79-.325t-.326-.79t.326-.789t.79-.326t.79.326t.326.79t-.326.789t-.79.326m.61-4.772q.236-.232.236-.613h-1.692q0 .373.237.61q.236.236.609.236t.61-.233m-3.994-1.113h6.769v-.769h-.846V9.125q0-.954-.48-1.697q-.478-.744-1.376-1.002v-.949h-1.367v.942q-.897.321-1.375 1.04q-.48.72-.48 1.672v1.946h-.845z");
}
</style><path class="zg4ez8rrr"/>`,
		"fallback": "material-symbols-light:doorbell-3p-sharp",
	});
}

export default Component;
