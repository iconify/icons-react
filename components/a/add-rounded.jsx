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
		"content": `<style>.kyo8-xp4g {
  fill: currentColor;
  d: path("M11.5 12.5h-5q-.213 0-.356-.144T6 11.999t.144-.356t.356-.143h5v-5q0-.213.144-.356T12.001 6t.356.144t.143.356v5h5q.213 0 .356.144t.144.357t-.144.356t-.356.143h-5v5q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356z");
}
</style><path class="kyo8-xp4g"/>`,
		"fallback": "material-symbols-light:add-rounded",
	});
}

export default Component;
