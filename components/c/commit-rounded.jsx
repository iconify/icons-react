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
		"content": `<style>.qv84o8fpf {
  fill: currentColor;
  d: path("M8.813 15.863Q7.45 14.725 7.1 13H3q-.425 0-.712-.288T2 12t.288-.712T3 11h4.1q.35-1.725 1.713-2.863T12 7t3.188 1.138T16.9 11H21q.425 0 .713.288T22 12t-.288.713T21 13h-4.1q-.35 1.725-1.712 2.863T12 17t-3.187-1.137M12 15q1.25 0 2.125-.875T15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15");
}
</style><path class="qv84o8fpf"/>`,
		"fallback": "material-symbols:commit-rounded",
	});
}

export default Component;
