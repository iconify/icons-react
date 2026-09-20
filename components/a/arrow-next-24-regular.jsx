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
		"content": `<style>.vbsw7dhtf {
  fill: currentColor;
  d: path("M18.25 3a.75.75 0 0 1 .743.648L19 3.75v16.5a.75.75 0 0 1-1.493.102l-.007-.102V3.75a.75.75 0 0 1 .75-.75m-13.03.22a.75.75 0 0 1 .976-.073l.084.073l8.25 8.25a.75.75 0 0 1 .073.976l-.073.084l-8.25 8.25a.75.75 0 0 1-1.133-.976l.073-.084L12.94 12L5.22 4.28a.75.75 0 0 1 0-1.06");
}
</style><path class="vbsw7dhtf"/>`,
		"fallback": "fluent:arrow-next-24-regular",
	});
}

export default Component;
