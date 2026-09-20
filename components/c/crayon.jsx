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
		"content": `<style>.p7mt2vh5l {
  fill: var(--svg-color--ea596e, #ea596e);
  d: path("M4.139 23.24L26.407.972l8.62 8.62L12.759 31.86z");
}

.qndwq-46w {
  fill: var(--svg-color--be1931, #be1931);
  d: path("M26.886 9.353c-1.521-1.521-5.982.476-9.967 4.459c-3.983 3.984-5.979 8.446-4.459 9.967s5.983-.476 9.967-4.459c3.983-3.984 5.979-8.447 4.459-9.967");
}

.w8wqpfb1d {
  fill: var(--svg-color--292f33, #292f33);
  d: path("m23.534 3.846l1.437-1.436l8.62 8.62l-1.437 1.436zM5.576 21.803l1.436-1.437l8.62 8.62l-1.437 1.437z");
}

.wgrqpcbvg {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M35.702 7.477L28.522.298a1.015 1.015 0 0 0-1.436 0L3.395 23.989a1.016 1.016 0 0 0 0 1.437c.72.719-3.14 7.959-3.395 8.496L2.068 36c.536-.255 7.785-4.115 8.506-3.395a1.015 1.015 0 0 0 1.436 0L35.702 8.913a1.015 1.015 0 0 0 0-1.436");
}
</style><path class="wgrqpcbvg"/><path class="p7mt2vh5l"/><path class="w8wqpfb1d"/><path class="qndwq-46w"/>`,
		"fallback": "twemoji:crayon",
	});
}

export default Component;
