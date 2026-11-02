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
		"content": `<style>.v9agmqbba {
  fill: currentColor;
  d: path("M15.618 8H8.382l.724-1.447a3.234 3.234 0 0 1 5.788 0ZM5.382 14l2-4h9.236l2 4Zm14.236 2l.276.553c.56 1.12.597 2.457.034 3.583a3.44 3.44 0 0 1-1.154 1.328A3.2 3.2 0 0 1 17 22H7a3.2 3.2 0 0 1-1.774-.536a3.44 3.44 0 0 1-1.154-1.328c-.563-1.126-.526-2.463.034-3.583L4.382 16Z");
}
</style><path class="v9agmqbba"/>`,
		"fallback": "coolicons:chart-pyramid-fill-round",
	});
}

export default Component;
