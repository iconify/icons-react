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
		"content": `<style>.jjt-xgexg {
  fill: currentColor;
  d: path("M20 108a12 12 0 0 1 12-12h76a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m204-12h-76a12 12 0 0 0 0 24h76a12 12 0 0 0 0-24M68 136H32a12 12 0 0 0 0 24h36a12 12 0 0 0 0-24m156 0h-36a12 12 0 0 0 0 24h36a12 12 0 0 0 0-24M96 148a12 12 0 0 0 12 12h40a12 12 0 0 0 0-24h-40a12 12 0 0 0-12 12m-44 28H32a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24m56 0H92a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m56 0h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24m60 0h-20a12 12 0 0 0 0 24h20a12 12 0 0 0 0-24M32 80h192a12 12 0 0 0 0-24H32a12 12 0 0 0 0 24");
}
</style><path class="jjt-xgexg"/>`,
		"fallback": "ph:gradient-bold",
	});
}

export default Component;
