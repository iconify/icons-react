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
		"content": `<style>.ui92sabvq {
  fill: currentColor;
  d: path("m23.75 15l.102.007a.75.75 0 0 1 .648.743l-.007.102a.75.75 0 0 1-.743.648h-6.188l7.969 7.97l.072.084a.75.75 0 0 1-1.133.976l-7.97-7.97v6.19l-.007.102A.75.75 0 0 1 15 23.75v-8l.007-.101A.75.75 0 0 1 15.75 15zM2.47 2.47a.75.75 0 0 1 1.06 0l7.97 7.967V4.25l.007-.102A.75.75 0 0 1 13 4.25v8l-.007.102a.75.75 0 0 1-.743.648h-8l-.101-.007a.75.75 0 0 1-.649-.743l.007-.101a.75.75 0 0 1 .743-.649h6.19L2.47 3.53l-.073-.084a.75.75 0 0 1 .073-.976");
}
</style><path class="ui92sabvq"/>`,
		"fallback": "fluent:arrow-minimize-top-left-bottom-right-28-regular",
	});
}

export default Component;
