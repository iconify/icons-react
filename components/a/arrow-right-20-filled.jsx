import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ukxqoobsr {
  fill: currentColor;
  d: path("M11.265 3.205a.75.75 0 0 0-1.03 1.09l5.239 4.955H2.75a.75.75 0 0 0 0 1.5h12.726l-5.241 4.957a.75.75 0 1 0 1.03 1.09l6.418-6.07a1 1 0 0 0 .3-.566a.75.75 0 0 0-.002-.329a1 1 0 0 0-.298-.557z");
}
</style><path class="ukxqoobsr"/>`,
		"fallback": "fluent:arrow-right-20-filled",
	});
}

export default Component;
