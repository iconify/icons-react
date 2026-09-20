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
		"content": `<style>.aw-63pbgo {
  fill: currentColor;
  d: path("M8.5 21.52v-1h7v1zM16.192 17V3H7.808v14zM12.04 6.308q.327 0 .548-.222q.22-.222.22-.549t-.222-.548t-.549-.22t-.547.222t-.22.549t.22.547t.55.22M7.808 3v14zm-1 15V2h10.384v3.723h.731v2.9h-.73V18z");
}
</style><path class="aw-63pbgo"/>`,
		"fallback": "material-symbols-light:dock-outline-sharp",
	});
}

export default Component;
