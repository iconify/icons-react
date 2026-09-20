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
		"content": `<style>.zv2rkpbzh {
  fill: currentColor;
  d: path("M3 3.5a.5.5 0 0 1 .5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5a.5.5 0 0 1-.5-.5M9 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h.22l.212-.845a3.2 3.2 0 0 1 .84-1.485L13 11.943V5a2 2 0 0 0-2-2zm6 2v4.943l-1 1V5a2 2 0 0 1 2-2h.5a.5.5 0 0 1 0 1H16a1 1 0 0 0-1 1m-4.02 10.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02");
}
</style><path class="zv2rkpbzh"/>`,
		"fallback": "fluent:column-edit-20-filled",
	});
}

export default Component;
