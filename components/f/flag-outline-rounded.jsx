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
		"content": `<style>.x8vt8fmno {
  fill: currentColor;
  d: path("M7 13v7q0 .213-.144.356t-.357.144t-.356-.144T6 20V5.808q0-.343.232-.576T6.808 5h5.713q.29 0 .518.177t.284.47L13.593 7h4.6q.343 0 .575.23T19 7.8v6.4q0 .34-.232.57t-.576.23H14.48q-.29 0-.518-.177t-.284-.47L13.407 13zm7.65 1H18V8h-4.579q-.29 0-.518-.177t-.284-.47L12.35 6H7v6h6.579q.29 0 .518.177t.284.47zm-2.15-4");
}
</style><path class="x8vt8fmno"/>`,
		"fallback": "material-symbols-light:flag-outline-rounded",
	});
}

export default Component;
