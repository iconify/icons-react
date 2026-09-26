import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.go5ytorxp {
  fill: currentColor;
  d: path("M25.985 4c4.69 0 6.8 5.876 3.181 8.858L16.726 23.11l-1.777 1.471a1 1 0 0 1-.084.063l-5.509 4.54a3.573 3.573 0 0 1-5.34-4.587l6.104-10.239l-6.32-3.642A3.6 3.6 0 0 1 5.598 4zM5.733 25.621a1.574 1.574 0 0 0 2.352 2.019l7.41-6.107l.354-.293a2.334 2.334 0 0 0-.341-3.829l-3.65-2.062zM13.82 6c1.142 1.52 1.422 3.666.325 5.54l-1.234 2.107l3.581 2.023a4.3 4.3 0 0 1 2.168 3.254l9.234-7.609C30.065 9.525 28.799 6 25.985 6zM5.598 6a1.6 1.6 0 0 0-.8 2.982l6.375 3.675l1.246-2.128c1.167-1.993-.263-4.502-2.572-4.515L7.413 6z");
}
</style><path class="go5ytorxp"/>`,
		"fallback": "fluent:autopilot-32-regular",
	});
}

export default Component;
