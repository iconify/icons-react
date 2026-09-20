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
		"content": `<style>.m_vq2zb9n {
  fill: currentColor;
  d: path("M6 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 4a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 4a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4-8a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 4a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m.413 1.57a5.5 5.5 0 0 0-1.198 2.153a1.25 1.25 0 0 1 1.198-2.153m4.33-1.815a1.25 1.25 0 1 0-1.325.101a5.5 5.5 0 0 1 1.325-.1M14 5.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5M14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.625-1.995a.625.625 0 1 1 1.25 0a.625.625 0 0 1-1.25 0m-1.228-3.547c-.011-1.137.805-1.955 1.853-1.955c1.031 0 1.853.846 1.853 1.95c0 .586-.214.908-.727 1.319l-.277.214c-.246.194-.329.3-.346.448l-.011.156A.5.5 0 0 1 14 15.5c0-.57.21-.884.716-1.288l.278-.215c.288-.23.36-.342.36-.544c0-.558-.382-.95-.854-.95c-.494 0-.859.366-.854.945a.5.5 0 1 1-1 .01");
}
</style><path class="m_vq2zb9n"/>`,
		"fallback": "fluent:dialpad-question-mark-20-filled",
	});
}

export default Component;
