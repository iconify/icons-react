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
		"content": `<style>.h_okowbjj {
  fill: currentColor;
  d: path("M3.75 11h4.5a.75.75 0 0 1 .743.648L9 11.75v4.5a.75.75 0 0 1-1.493.102L7.5 16.25v-2.69l-4.47 4.47a.75.75 0 0 1-1.133-.976l.073-.084l4.468-4.47H3.75a.75.75 0 0 1-.743-.648L3 11.75a.75.75 0 0 1 .648-.743zh4.5zm14.28-9.03a.75.75 0 0 1 .073.976l-.073.084L13.06 8h3.19a.75.75 0 0 1 .743.648L17 8.75a.75.75 0 0 1-.648.743l-.102.007h-5a.75.75 0 0 1-.743-.648L10.5 8.75v-5a.75.75 0 0 1 1.493-.102L12 3.75v3.188l4.97-4.968a.75.75 0 0 1 1.06 0");
}
</style><path class="h_okowbjj"/>`,
		"fallback": "fluent:arrow-minimize-20-filled",
	});
}

export default Component;
