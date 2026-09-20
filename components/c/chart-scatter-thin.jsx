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
		"content": `<style>.fskh1d_wt {
  fill: currentColor;
  d: path("M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v156h188a4 4 0 0 1 4 4m-96-52a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-24-56a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-32 72a8 8 0 1 0-8-8a8 8 0 0 0 8 8m96-48a8 8 0 1 0-8-8a8 8 0 0 0 8 8m24-40a8 8 0 1 0-8-8a8 8 0 0 0 8 8m-8 88a8 8 0 1 0-8-8a8 8 0 0 0 8 8");
}
</style><path class="fskh1d_wt"/>`,
		"fallback": "ph:chart-scatter-thin",
	});
}

export default Component;
