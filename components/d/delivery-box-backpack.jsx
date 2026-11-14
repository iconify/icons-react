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
		"content": `<style>.jww4u2bfl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15.5 4.25h-.257q-.122-2-2.243-2h-2q-2.121 0-2.243 2H8.5q-1.76 0-3.005 1.245T4.25 8.5v11q0 2.25 2.25 2.25h11q2.25 0 2.25-2.25v-11q0-1.76-1.245-3.005T15.5 4.25m-4.5-.5q-.612 0-.725.5h3.45q-.113-.5-.725-.5zm1 7h2.25q2.5 0 2.5 2.5v3q0 1.036-.732 1.768t-1.768.732h-4.5q-1.036 0-1.768-.732T7.25 16.25v-3q0-2.5 2.5-2.5z");
}
</style><path class="jww4u2bfl"/>`,
		"fallback": "uix-solid:delivery-box-backpack",
	});
}

export default Component;
