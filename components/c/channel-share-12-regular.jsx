import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jvfbk8bls {
  fill: currentColor;
  d: path("M3 1a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3.085a1.5 1.5 0 1 0 0-1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1h1a2 2 0 0 0-2-2zm5 6.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M9 11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5.915a1.5 1.5 0 1 0 0 1H9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1H4a2 2 0 0 0 2 2zM4.5 5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1");
}
</style><path class="jvfbk8bls"/>`,
		"fallback": "fluent:channel-share-12-regular",
	});
}

export default Component;
