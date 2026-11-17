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
		"content": `<style>.klsy0lb8n {
  stroke-opacity: 0.4;
  d: path("M12 17v4m-8 0h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qseqqo6-a {
  d: path("M12 17H7.778a2 2 0 0 1-2-2V9.352a2 2 0 0 1 .683-1.505l4.222-3.695a2 2 0 0 1 2.634 0l4.222 3.695a2 2 0 0 1 .683 1.505V15a2 2 0 0 1-2 2z");
}
</style><g class="nrj6p8qat"><path class="klsy0lb8n"/><path class="qseqqo6-a"/></g>`,
		"fallback": "coolicons:house-connection-duocolor",
	});
}

export default Component;
