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
		"content": `<style>.vxc96kbrl {
  fill: currentColor;
  d: path("M5 4v5.022a5.5 5.5 0 0 0-1 .185V4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H9.743q.381-.462.657-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1m8.5 11h-2.522a5.6 5.6 0 0 0 0-1H13.5a.5.5 0 0 1 0 1m0-2h-2.707a5.5 5.5 0 0 0-.393-1h3.1a.5.5 0 0 1 0 1m0-2H9.743a5.5 5.5 0 0 0-1.08-1H13.5a.5.5 0 0 1 0 1m1.293-4L11 3.207V6.5a.5.5 0 0 0 .5.5zM5.5 19a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m-2.353-4.854l-.003.003a.5.5 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L4.707 15H7.5a.5.5 0 0 0 0-1H4.707l1.147-1.146a.5.5 0 0 0-.708-.708z");
}
</style><path class="vxc96kbrl"/>`,
		"fallback": "fluent:document-bullet-list-arrow-left-20-regular",
	});
}

export default Component;
