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
		"content": `<style>.ehvpsfbpy {
  fill: currentColor;
  d: path("m6.907 6.68l2.734-2.73a6.66 6.66 0 1 1 9.42 9.42l-8.338 8.338a1 1 0 0 1-1.415-1.415l8.339-8.336A4.66 4.66 0 0 0 11.229 5.2l-.174.166l-3.641 3.633H12a1 1 0 0 1 .993.884L13 10a1 1 0 0 1-.883.993l-.117.006l-7.06-.001l-.095-.01l-.112-.024l-.131-.047l-.082-.04l-.102-.064a1 1 0 0 1-.125-.107l-.092-.105l-.074-.114l-.046-.093l-.038-.105l-.016-.058l-.016-.081l-.007-.062L4 10V3.002a1 1 0 0 1 1.993-.116L6 3.002v4.584l3.641-3.635z");
}
</style><path class="ehvpsfbpy"/>`,
		"fallback": "fluent:arrow-undo-24-filled",
	});
}

export default Component;
