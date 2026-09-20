import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a1kbt0bci {
  fill: var(--svg-color--da121a, #da121a);
  d: path("m16.472 18.516l-.944 2.906L18 19.626l2.472 1.796l-.695-2.138l-.249-.768L22 16.72h-3.056L18 13.814l-.944 2.906H14z");
}

.dpyg-tdwp {
  fill: var(--svg-color--078930, #078930);
  d: path("M32 5H4a3.97 3.97 0 0 0-2.618.998L16.228 16.72h.828L18 13.814l.944 2.906H22l-2.472 1.796l.249.767l14.841 10.718A3.97 3.97 0 0 0 36 27V9a4 4 0 0 0-4-4");
}

.r0rudjrzh {
  fill: var(--svg-color--fcdd09, #fcdd09);
  d: path("M20.472 21.422L18 19.626l-2.472 1.796l.944-2.906L14 16.72h2.228L1.382 5.998A3.97 3.97 0 0 0 0 9v18a4 4 0 0 0 4 4h28a3.97 3.97 0 0 0 2.618-.998L19.777 19.284z");
}
</style><path class="dpyg-tdwp"/><path class="r0rudjrzh"/><path class="a1kbt0bci"/>`,
		"fallback": "twemoji:flag-french-guiana",
	});
}

export default Component;
