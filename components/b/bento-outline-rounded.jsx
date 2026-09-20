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
		"content": `<style>.wtgu9uihm {
  fill: currentColor;
  d: path("M4.5 18.116q-.69 0-1.153-.463T2.885 16.5v-9q0-.69.462-1.153T4.5 5.884h15q.69 0 1.153.463t.463 1.153v9q0 .69-.463 1.153t-1.153.463zm8.808-6.616h6.807v-4q0-.23-.192-.423t-.423-.192h-6.192zM4.5 17.116h7.808V6.885H4.5q-.23 0-.423.192t-.192.423v9q0 .23.192.423t.423.193M8 13.039q-.433 0-.735-.304q-.303-.302-.303-.735t.303-.736q.302-.303.735-.303t.736.303t.302.736t-.302.735q-.303.303-.736.303m5.308 4.077H19.5q.23 0 .423-.192t.193-.423v-4h-6.808z");
}
</style><path class="wtgu9uihm"/>`,
		"fallback": "material-symbols-light:bento-outline-rounded",
	});
}

export default Component;
