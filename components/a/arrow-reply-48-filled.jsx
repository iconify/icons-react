import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f6akizkjg {
  fill: currentColor;
  d: path("M17.56 10.56a1.5 1.5 0 0 0-2.12-2.12l-11 11a1.5 1.5 0 0 0 0 2.12l11 11a1.5 1.5 0 0 0 2.12-2.12L9.122 22H24.5C33.613 22 41 29.387 41 38.5a1.5 1.5 0 0 0 3 0C44 27.73 35.27 19 24.5 19H9.121z");
}
</style><path class="f6akizkjg"/>`,
		"fallback": "fluent:arrow-reply-48-filled",
	});
}

export default Component;
