import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.okh0g4bfk {
  fill: currentColor;
  d: path("m12.75 4l.102.007a.75.75 0 0 1 .648.743l-.007.102a.75.75 0 0 1-.743.648H6.562L22.5 21.439V15.25l.007-.102A.75.75 0 0 1 24 15.25v8l-.007.102a.75.75 0 0 1-.743.648h-8l-.102-.007a.75.75 0 0 1-.648-.743l.007-.102a.75.75 0 0 1 .743-.648h6.19L5.5 6.56v6.19l-.007.102A.75.75 0 0 1 4 12.75v-8l.007-.102A.75.75 0 0 1 4.75 4z");
}
</style><path class="okh0g4bfk"/>`,
		"fallback": "fluent:arrow-maximize-top-left-bottom-right-28-regular",
	});
}

export default Component;
