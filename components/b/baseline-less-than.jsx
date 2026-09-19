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
		"content": `<style>.smqyzi5gq {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z");
}
</style><path class="smqyzi5gq"/>`,
		"fallback": "ic:baseline-less-than",
	});
}

export default Component;
