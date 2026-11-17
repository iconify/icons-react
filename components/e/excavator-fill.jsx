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
		"content": `<style>.l3296abom {
  fill: currentColor;
  d: path("m12.88 10.473l2.184-5.824a1 1 0 0 1 1.643-.356l4 4C21.422 9.008 22 9.961 22 11v3a2 2 0 0 1-2 2h-1a1 1 0 0 1-.894-.553l-1-2a1 1 0 0 1 .954-1.445a1 1 0 0 1 .834.551L19.618 14H20v-3c0-.468-.395-.98-.707-1.293l-2.902-2.902L14 13.181v1.99A3.001 3.001 0 0 1 13 21H5a3 3 0 1 1 0-6V9a2 2 0 0 1 2-2h1c1.039 0 1.992.578 2.707 1.293l2 2q.088.088.173.18M8 9a1 1 0 0 0-1 1v2h4.586L8.879 9.293A1 1 0 0 0 8.172 9Zm-3 8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2Z");
}
</style><path class="l3296abom"/>`,
		"fallback": "coolicons:excavator-fill",
	});
}

export default Component;
