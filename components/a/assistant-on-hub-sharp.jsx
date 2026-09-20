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
		"content": `<style>.vyj9fbbec {
  fill: currentColor;
  d: path("M10.807 12.001q.23-.23.23-.54q0-.309-.23-.539t-.54-.23t-.539.23q-.23.23-.23.54t.23.539t.54.23t.539-.23m-3.46 0q.23-.23.23-.54q0-.309-.23-.539t-.54-.23t-.539.23q-.23.23-.23.54t.23.539t.54.23t.539-.23m6.386.23q.31 0 .539-.23t.23-.54t-.23-.539t-.54-.23t-.539.23q-.23.23-.23.54t.23.539t.54.23m3.999-.23q.23-.23.23-.54q0-.309-.23-.539t-.54-.23t-.539.23t-.23.54t.23.539t.54.23t.539-.23M12 19.461q-2.436 0-3.968-.289q-1.532-.29-1.532-.745v-.965H3v-12h18v12h-3.5v.965q0 .456-1.532.745q-1.532.29-3.968.29");
}
</style><path class="vyj9fbbec"/>`,
		"fallback": "material-symbols-light:assistant-on-hub-sharp",
	});
}

export default Component;
