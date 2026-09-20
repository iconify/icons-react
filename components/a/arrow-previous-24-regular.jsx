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
		"content": `<style>.b2u_92o5b {
  fill: currentColor;
  d: path("M5.75 3a.75.75 0 0 0-.743.648L5 3.75v16.5a.75.75 0 0 0 1.493.102l.007-.102V3.75A.75.75 0 0 0 5.75 3m13.03.22a.75.75 0 0 0-.976-.073l-.084.073l-8.25 8.25a.75.75 0 0 0-.073.976l.073.084l8.25 8.25a.75.75 0 0 0 1.133-.976l-.073-.084L11.06 12l7.72-7.72a.75.75 0 0 0 0-1.06");
}
</style><path class="b2u_92o5b"/>`,
		"fallback": "fluent:arrow-previous-24-regular",
	});
}

export default Component;
