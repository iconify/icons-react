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
		"content": `<style>.mnupajbyk {
  fill: currentColor;
  d: path("M7.225 10.082a.5.5 0 0 1 .629.064l2.646 2.647l1.646-1.646l.079-.065a.5.5 0 0 1 .629.064l3 3A.5.5 0 0 1 16 14.5v.5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1.5a.5.5 0 0 1 .146-.354l3-3zM5 13.707V15a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.293l-2.5-2.5l-1.646 1.646a.5.5 0 0 1-.707 0L7.5 11.208zM13 2a3 3 0 0 1 3 3v5.5a.5.5 0 0 1-.854.354L12.5 8.207l-1.646 1.647a.5.5 0 0 1-.707 0L7.5 7.207L4.854 9.854A.5.5 0 0 1 4 9.5V5a3 3 0 0 1 3-3zM7 3a2 2 0 0 0-2 2v3.293l2.146-2.147l.079-.064a.5.5 0 0 1 .629.064L10.5 8.793l1.646-1.647l.079-.064a.5.5 0 0 1 .629.064L15 9.293V5a2 2 0 0 0-2-2z");
}
</style><path class="mnupajbyk"/>`,
		"fallback": "fluent:document-broken-20-regular",
	});
}

export default Component;
