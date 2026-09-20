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
		"content": `<style>.kjix3p7ot {
  fill: currentColor;
  d: path("M12 6.616q.271 0 .443-.173q.173-.172.173-.443t-.173-.443T12 5.385t-.443.172t-.173.443t.173.443t.443.173m.357 7.664q.143-.143.143-.357V8.846q0-.213-.143-.356T12 8.346t-.357.144t-.143.356v5.077q0 .214.143.357t.357.143t.357-.143M6.077 17l-1.704 1.704q-.379.379-.876.174T3 18.133V4.616q0-.691.463-1.153T4.616 3h14.769q.69 0 1.153.463T21 4.616v10.769q0 .69-.462 1.153T19.385 17zm-.427-1h13.735q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T19.385 4H4.615q-.23 0-.423.192T4 4.615v13.03zM4 16V4z");
}
</style><path class="kjix3p7ot"/>`,
		"fallback": "material-symbols-light:chat-info-outline-rounded",
	});
}

export default Component;
