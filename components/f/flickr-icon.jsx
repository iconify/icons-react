import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":114};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.irgveczxy {
  fill: var(--svg-color--0063dc, #0063dc);
  d: path("M56.889 113.778c31.42 0 56.889-25.47 56.889-56.89C113.778 25.476 88.308 0 56.888 0C25.47 0 0 25.475 0 56.889c0 31.42 25.47 56.889 56.889 56.889");
}

.tdge34b3k {
  fill: var(--svg-color--ff0084, #ff0084);
  d: path("M199.111 113.778c31.42 0 56.889-25.47 56.889-56.89C256 25.476 230.53 0 199.111 0s-56.889 25.475-56.889 56.889c0 31.42 25.47 56.889 56.89 56.889");
}
</style><path class="tdge34b3k"/><path class="irgveczxy"/>`,
		"fallback": "logos:flickr-icon",
	});
}

export default Component;
