import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uubtfhdka {
  fill: currentColor;
  d: path("M2.354 7.354L4.998 4.71V16.5a.5.5 0 0 0 1 0V4.705l2.649 2.65a.5.5 0 0 0 .707-.708l-3.49-3.49l-.01-.01A.5.5 0 0 0 5.5 3h-.002a.5.5 0 0 0-.383.179L1.646 6.647a.5.5 0 1 0 .708.707m15.293 5.292l-2.644 2.644V3.5a.5.5 0 0 0-1 0v11.795l-2.65-2.65a.5.5 0 0 0-.707.708l3.49 3.49l.01.01a.5.5 0 0 0 .355.147h.002a.5.5 0 0 0 .383-.179l3.468-3.468a.5.5 0 1 0-.707-.707");
}
</style><path class="uubtfhdka"/>`,
		"fallback": "fluent:arrow-sort-20-regular",
	});
}

export default Component;
