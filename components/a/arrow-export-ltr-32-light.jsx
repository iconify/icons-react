import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gsgmitbwz {
  fill: currentColor;
  d: path("M2.5 5a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-1 0v-20a.5.5 0 0 1 .5-.5m18.647 2.146a.5.5 0 0 1 .707 0l8 8a.5.5 0 0 1 0 .707l-8 8a.5.5 0 1 1-.707-.707L28.293 16H6.5a.5.5 0 0 1 0-1h21.793l-7.146-7.146a.5.5 0 0 1 0-.708");
}
</style><path class="gsgmitbwz"/>`,
		"fallback": "fluent:arrow-export-ltr-32-light",
	});
}

export default Component;
