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
		"content": `<style>.oa0uw3blz {
  fill: currentColor;
  d: path("m2.707 2.293l19 19a.999.999 0 1 1-1.414 1.414L18.586 21H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h.586L1.293 3.707a.999.999 0 1 1 1.414-1.414M22 18.757L7.914 4.672l1.379-1.379A1 1 0 0 1 10 3h4c.265 0 .52.105.707.293L17.414 6H21a1 1 0 0 1 1 1Zm-8.057-2.399l-1.46-1.461A1.2 1.2 0 0 1 12 15a2 2 0 0 1-2-2c0-.166.037-.33.103-.483l-1.461-1.46C8.243 11.627 8 12.299 8 13a4 4 0 0 0 4 4c.701 0 1.373-.243 1.943-.642");
}
</style><path class="oa0uw3blz"/>`,
		"fallback": "coolicons:camera-off-fill-sharp",
	});
}

export default Component;
