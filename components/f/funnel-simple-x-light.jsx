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
		"content": `<style>.hvk0lhytp {
  fill: currentColor;
  d: path("M192 142H64a6 6 0 0 1 0-12h128a6 6 0 0 1 0 12m40-60H24a6 6 0 0 0 0 12h208a6 6 0 0 0 0-12m-104 96h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m92.24-6.24a6 6 0 0 0-8.48 0L192 191.51l-19.76-19.75a6 6 0 0 0-8.48 8.48L183.51 200l-19.75 19.76a6 6 0 1 0 8.48 8.48L192 208.49l19.76 19.75a6 6 0 0 0 8.48-8.48L200.49 200l19.75-19.76a6 6 0 0 0 0-8.48");
}
</style><path class="hvk0lhytp"/>`,
		"fallback": "ph:funnel-simple-x-light",
	});
}

export default Component;
