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
		"content": `<style>.w507qnbhx {
  fill: currentColor;
  d: path("m12.28 16.53l.073-.083a.75.75 0 0 0-.073-.977l-2.72-2.72h6.69l.102-.007A.75.75 0 0 0 17 12l-.006-.101a.75.75 0 0 0-.744-.649H9.56l2.722-2.72l.072-.084a.75.75 0 0 0-1.133-.977l-4.001 4l-.073.084a.75.75 0 0 0 .073.977l4 4l.085.073a.75.75 0 0 0 .976-.072M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m0 18.5a8.5 8.5 0 1 1 0-17a8.5 8.5 0 0 1 0 17");
}
</style><path class="w507qnbhx"/>`,
		"fallback": "fluent:arrow-circle-left-24-regular",
	});
}

export default Component;
