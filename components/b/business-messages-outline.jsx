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
		"content": `<style>.pjg01zxtv {
  fill: currentColor;
  d: path("M6.942 19q-.728 0-1.22-.462q-.491-.463-.491-1.153V8.846L2 5h17.289q.728 0 1.22.463q.491.462.491 1.153v10.769q0 .69-.491 1.153q-.492.462-1.22.462zM4.146 6l2.085 2.462v8.923q0 .23.221.423t.49.192H19.29q.269 0 .49-.192t.221-.423V6.615q0-.23-.221-.423T19.289 6zm8.45 10.5l.708-.708l-1.754-1.6h5.316v-1h-7.75zm-3.48-5.692h7.75L13.404 7.5l-.708.708l1.754 1.6H9.116zM12.073 12");
}
</style><path class="pjg01zxtv"/>`,
		"fallback": "material-symbols-light:business-messages-outline",
	});
}

export default Component;
