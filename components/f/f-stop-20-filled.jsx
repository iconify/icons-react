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
		"content": `<style>.xssczdygz {
  fill: currentColor;
  d: path("M11.08 5.681a2.583 2.583 0 0 1 3.525-1.955l.361.148a.75.75 0 1 0 .568-1.388l-.36-.148a4.083 4.083 0 0 0-5.572 3.09L8.991 9H5.75a.75.75 0 1 0 0 1.5h2.984l-.507 2.962c-.31 1.813-2.363 2.73-3.92 1.751l-.158-.098a.75.75 0 0 0-.798 1.27l.157.098c2.462 1.548 5.707.098 6.198-2.768l.55-3.215h2.994a.75.75 0 1 0 0-1.5h-2.737z");
}
</style><path class="xssczdygz"/>`,
		"fallback": "fluent:f-stop-20-filled",
	});
}

export default Component;
