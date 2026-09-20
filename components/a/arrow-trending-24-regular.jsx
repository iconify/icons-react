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
		"content": `<style>.fx0ptkbhz {
  fill: currentColor;
  d: path("M13.749 5.5h7.554l.1.014l.099.028l.06.026q.12.052.219.15l.04.044l.044.057l.054.09l.039.09l.019.064l.014.064l.009.095v7.532a.75.75 0 0 1-1.493.102l-.007-.102V8.059l-7.719 7.72a.75.75 0 0 1-.976.073l-.085-.073l-2.97-2.97l-5.47 5.47a.75.75 0 0 1-1.133-.977l.073-.084l6-6a.75.75 0 0 1 .976-.073l.084.073l2.97 2.97L19.439 7h-5.69a.75.75 0 0 1-.742-.648L13 6.25a.75.75 0 0 1 .648-.743z");
}
</style><path class="fx0ptkbhz"/>`,
		"fallback": "fluent:arrow-trending-24-regular",
	});
}

export default Component;
