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
		"content": `<style>.ktww8c1yy {
  fill: currentColor;
  d: path("M12 6.616q.271 0 .443-.173q.173-.172.173-.443t-.173-.443T12 5.385t-.443.172t-.173.443t.173.443t.443.173m-.5 7.807h1V8.346h-1zM3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077zM5.65 16h13.735q.23 0 .423-.192t.192-.423V4.615q0-.23-.192-.423T19.385 4H4.615q-.23 0-.423.192T4 4.615v13.03zM4 16V4z");
}
</style><path class="ktww8c1yy"/>`,
		"fallback": "material-symbols-light:chat-info-outline",
	});
}

export default Component;
