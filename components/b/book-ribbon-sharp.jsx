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
		"content": `<style>.p4503ul5f {
  fill: currentColor;
  d: path("M15.192 14V4l3.116-1v10zM21 16.677V5.575q.275.104.516.223q.24.12.484.271V18.3q-1.002-.648-2.142-.955T17.5 17.04q-1.48 0-2.88.447T12 18.77q-1.22-.834-2.62-1.282T6.5 17.04q-1.217 0-2.358.306q-1.14.307-2.142.955V6.07q1.008-.634 2.151-.871T6.5 4.961q1.616 0 3.128.537T12.5 6.927v10.392q1.166-.634 2.428-.957t2.572-.323q.9 0 1.785.14t1.715.498");
}
</style><path class="p4503ul5f"/>`,
		"fallback": "material-symbols-light:book-ribbon-sharp",
	});
}

export default Component;
