import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vk2fwkv9l {
  fill: currentColor;
  d: path("M14 11.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5V6h12zm-3.396-3.854a.5.5 0 0 0-.708 0L7.25 10.293L6.104 9.146l-.079-.064a.5.5 0 0 0-.629.772l1.5 1.5a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708M11.5 2A2.5 2.5 0 0 1 14 4.5V5H2v-.5A2.5 2.5 0 0 1 4.5 2z");
}
</style><path class="vk2fwkv9l"/>`,
		"fallback": "fluent:calendar-checkmark-center-16-filled",
	});
}

export default Component;
