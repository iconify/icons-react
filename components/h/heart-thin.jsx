import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.apge3wbiy {
  fill: currentColor;
  d: path("M178 44c-21.44 0-39.92 10.19-50 27.07C117.92 54.19 99.44 44 78 44a58.07 58.07 0 0 0-58 58c0 28.59 18 58.47 53.4 88.79a334 334 0 0 0 52.7 36.73a4 4 0 0 0 3.8 0a334 334 0 0 0 52.7-36.73C218 160.47 236 130.59 236 102a58.07 58.07 0 0 0-58-58m-50 175.42c-14-8-100-59.35-100-117.42a50.06 50.06 0 0 1 50-50c21.11 0 38.85 11.31 46.3 29.51a4 4 0 0 0 7.4 0C139.15 63.31 156.89 52 178 52a50.06 50.06 0 0 1 50 50c0 58-86 109.46-100 117.42");
}
</style><path class="apge3wbiy"/>`,
		"fallback": "ph:heart-thin",
	});
}

export default Component;
