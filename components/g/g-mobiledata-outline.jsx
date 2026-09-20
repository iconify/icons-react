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
		"content": `<style>.o62z5vmqz {
  fill: currentColor;
  d: path("M9.116 16.616q-.691 0-1.153-.463T7.5 15V9q0-.69.463-1.153t1.153-.463H14q.46 0 .826.27q.366.271.366.73H9.116q-.27 0-.443.174Q8.5 8.73 8.5 9v6q0 .27.173.442q.173.173.443.173h4.769q.269 0 .442-.173T14.5 15v-2.5h-2.384v-1H15.5V15q0 .69-.462 1.153t-1.154.463z");
}
</style><path class="o62z5vmqz"/>`,
		"fallback": "material-symbols-light:g-mobiledata-outline",
	});
}

export default Component;
