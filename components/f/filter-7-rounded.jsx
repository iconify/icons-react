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
		"content": `<style>.od7qi_73q {
  fill: currentColor;
  d: path("m14.962 6.5l-3.485 7.335q-.11.238.018.451t.397.214q.14 0 .254-.07t.181-.2l3.63-7.626q.032-.062.043-.213V6q0-.213-.143-.357T15.5 5.5h-4q-.213 0-.357.143T11 6t.143.357t.357.143zM8.116 17q-.691 0-1.153-.462T6.5 15.385V4.615q0-.69.463-1.153T8.116 3h10.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T18.884 17zm-3 3q-.691 0-1.153-.462T3.5 18.385V7.115q0-.213.143-.356T4 6.616t.357.143t.143.357v11.269q0 .23.192.423t.423.192h11.27q.213 0 .356.143t.144.357t-.144.357t-.356.143z");
}
</style><path class="od7qi_73q"/>`,
		"fallback": "material-symbols-light:filter-7-rounded",
	});
}

export default Component;
