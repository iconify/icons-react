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
		"content": `<style>.oa8961lro {
  fill: currentColor;
  d: path("M4.616 21q-.691 0-1.153-.462T3 19.385V6.615q0-.69.463-1.152T4.615 5H9.3q.214 0 .357.143T9.8 5.5t-.143.357T9.3 6H4.615q-.23 0-.423.192T4 6.616v12.769q0 .23.192.423t.423.192h12.77q.23 0 .423-.192t.192-.423V13.46q0-.213.143-.356t.357-.143t.357.143t.143.357v5.923q0 .69-.462 1.153T17.384 21zM18.454 8.746l2.961 2.962q.14.14.15.344t-.15.364t-.353.159t-.354-.16l-2.962-2.961q-.448.396-1.038.586t-1.208.19q-1.567 0-2.649-1.081T11.769 6.5t1.082-2.649T15.5 2.769t2.649 1.082T19.231 6.5q0 .675-.21 1.237q-.21.561-.567 1.01m-1.015-.309q.792-.792.792-1.938t-.792-1.939T15.5 3.77t-1.939.793T12.77 6.5t.792 1.939t1.939.792t1.939-.792M4 12.519V20V6v6.23v-.28z");
}
</style><path class="oa8961lro"/>`,
		"fallback": "material-symbols-light:feature-search-outline-rounded",
	});
}

export default Component;
