import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d2qnrmbcr {
  fill: currentColor;
  d: path("m11.894 2.014l11.5 2.25A.75.75 0 0 1 24 5v18a.75.75 0 0 1-.606.736l-11.5 2.25A.75.75 0 0 1 11 25.25V2.75a.75.75 0 0 1 .894-.736M15 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5-8.5v19H4.75a.75.75 0 0 1-.743-.648L4 22.75V5.25a.75.75 0 0 1 .648-.743L4.75 4.5z");
}
</style><path class="d2qnrmbcr"/>`,
		"fallback": "fluent:conference-room-28-filled",
	});
}

export default Component;
