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
		"content": `<style>.mvp_9qbvr {
  fill: currentColor;
  d: path("M4 15h16V7H4zm-2 2V5h20v12h-2v2h-2v-2H6v2H4v-2zm2-2V7zm13.913-2.588q.587-.587.587-1.412t-.587-1.412T16.5 9t-1.412.588T14.5 11t.588 1.413T16.5 13t1.413-.587M6 13h7V9H6z");
}
</style><path class="mvp_9qbvr"/>`,
		"fallback": "material-symbols:audio-video-receiver-outline-sharp",
	});
}

export default Component;
