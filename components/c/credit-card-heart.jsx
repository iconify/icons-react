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
		"content": `<style>.cvcvyeb9j {
  fill: currentColor;
  d: path("M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v5.325q-.45-.325-.95-.575T20 10.325V8H4v4h9q-.975.95-1.537 2.238T10.9 17q0 .8.175 1.563t.5 1.437zm13.9.5L14.4 17q-.325-.325-.462-.7t-.138-.75q0-.8.575-1.425t1.475-.625q.7 0 1.1.325t.95.875q.5-.5.913-.85t1.137-.35q.925 0 1.488.638T22 15.574q0 .375-.15.75T21.4 17z");
}
</style><path class="cvcvyeb9j"/>`,
		"fallback": "material-symbols:credit-card-heart",
	});
}

export default Component;
