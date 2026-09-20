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
		"content": `<style>.ec28kdb6s {
  fill: currentColor;
  d: path("M7 2a2 2 0 0 0-2 2v3.085A1.5 1.5 0 0 1 6.915 9H7.5a1.5 1.5 0 1 1 0 3h-.585A1.5 1.5 0 0 1 5 13.915V16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.085A1.5 1.5 0 0 1 13.085 12H12.5a1.5 1.5 0 0 1 0-3h.585A1.5 1.5 0 0 1 15 7.085V4a2 2 0 0 0-2-2zm7.854 6.147a.5.5 0 0 0-.708.707L15.293 10H12.5a.5.5 0 0 0 0 1h2.793l-1.146 1.146a.5.5 0 0 0 .707.708l2-2l.002-.003a.5.5 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35zM4.707 10l1.146-1.146l.012-.012a.5.5 0 0 0-.719-.696l-2 2l-.002.003a.5.5 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L4.707 11H7.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5z");
}
</style><path class="ec28kdb6s"/>`,
		"fallback": "fluent:app-span-20-filled",
	});
}

export default Component;
