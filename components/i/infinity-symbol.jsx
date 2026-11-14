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
		"content": `<style>.jdysfinri {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.159 17.507q2.287-.936 3.99-4.114q1.702 1.922 3.81 2.401q2.677.608 4.141-1.344q2.588-3.45 0-6.9q-1.606-2.142-4.259-1.057q-2.287.936-3.99 4.114q-1.702-1.922-3.81-2.401Q5.364 7.598 3.9 9.55q-2.587 3.45 0 6.9q1.606 2.142 4.259 1.057");
}
</style><path class="jdysfinri"/>`,
		"fallback": "uix-solid:infinity-symbol",
	});
}

export default Component;
