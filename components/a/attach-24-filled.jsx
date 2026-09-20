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
		"content": `<style>.ozdcz0rbp {
  fill: currentColor;
  d: path("M16 2a6 6 0 0 1 4.397 10.084l-.19.194l-8.727 8.727l-.053.05l-.056.045a3.721 3.721 0 0 1-5.253-5.242l.149-.164l.015-.011l7.29-7.304a1 1 0 0 1 1.416 1.413l-7.29 7.304l-.012.008a1.721 1.721 0 0 0 2.289 2.553l.122-.1l.001.001l8.702-8.7l.159-.165a4 4 0 0 0-5.753-5.554l-.155.16l-.018.012l-9.326 9.33a1 1 0 0 1-1.414-1.415l9.309-9.313l.046-.043A6 6 0 0 1 16.001 2");
}
</style><path class="ozdcz0rbp"/>`,
		"fallback": "fluent:attach-24-filled",
	});
}

export default Component;
