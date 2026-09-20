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
		"content": `<style>.nyhipib7y {
  fill: currentColor;
  d: path("M12 21.385q-.671 0-1.143-.472t-.472-1.144h3.23q0 .672-.472 1.144T12 21.385m-7-2.616v-1h1.616V9.846q0-1.96 1.24-3.447T11 4.546V3h2v1.546q.39.075.74.192t.675.299L9.846 9.562v5.592h5.573l1.965-1.965v4.58H19v1zm7.23-6v-2.21l5.96-5.934l2.19 2.204l-5.94 5.94zm5.96-4.985l.925-.955l-.924-.945l-.95.95z");
}
</style><path class="nyhipib7y"/>`,
		"fallback": "material-symbols-light:edit-notifications-sharp",
	});
}

export default Component;
