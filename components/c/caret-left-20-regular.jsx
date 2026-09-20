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
		"content": `<style>.kvr-hlrym {
  fill: currentColor;
  d: path("M11.372 14.982A1 1 0 0 0 13 14.204V5.797a1 1 0 0 0-1.628-.778L6.649 8.833a1.5 1.5 0 0 0 0 2.334zM12 5.797v8.407l-4.722-3.815a.5.5 0 0 1 0-.778z");
}
</style><path class="kvr-hlrym"/>`,
		"fallback": "fluent:caret-left-20-regular",
	});
}

export default Component;
