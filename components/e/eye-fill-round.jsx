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
		"content": `<style>.nskupqbht {
  fill: currentColor;
  d: path("M3.721 8.892a10.75 10.75 0 0 1 18.202 2.723a1 1 0 0 1 0 .77a10.751 10.751 0 0 1-19.846 0a1 1 0 0 1 0-.77c.409-.984.963-1.903 1.644-2.723m5.515 1.94a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335");
}
</style><path class="nskupqbht"/>`,
		"fallback": "coolicons:eye-fill-round",
	});
}

export default Component;
