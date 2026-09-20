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
		"content": `<style>.dn8xmkbef {
  fill: currentColor;
  d: path("M3.293 4L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.998-2A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM12 12.707l-1-1V14a.5.5 0 0 0 1 0zm-3-3l-1-1V14a.5.5 0 0 0 1 0zM12 8v1.879l3.481 3.48L16.446 5H17.5a.5.5 0 0 0 0-1h-5a2.5 2.5 0 0 0-5 0H6.121L11 8.879V8a.5.5 0 0 1 1 0m-.5-4h-3a1.5 1.5 0 1 1 3 0");
}
</style><path class="dn8xmkbef"/>`,
		"fallback": "fluent:delete-off-20-filled",
	});
}

export default Component;
