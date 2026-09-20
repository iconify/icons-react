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
		"content": `<style>.maw80qo5s {
  fill: currentColor;
  d: path("M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10m.78 5.469l-.084-.073a.75.75 0 0 0-.882-.007l-.094.08l-.073.084a.75.75 0 0 0-.007.883l.08.094l2.72 2.72H7.75l-.103.006a.75.75 0 0 0-.64.642L7 11.999l.007.102a.75.75 0 0 0 .642.641l.101.007h6.69l-2.72 2.72l-.073.085a.75.75 0 0 0 1.05 1.05l.084-.073l4.001-4l.073-.085a.75.75 0 0 0 .007-.882l-.08-.094zl-.085-.073z");
}
</style><path class="maw80qo5s"/>`,
		"fallback": "fluent:arrow-circle-right-24-filled",
	});
}

export default Component;
