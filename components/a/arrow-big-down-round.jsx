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
		"content": `<style>.pgvk0vbnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h-1a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2H6c-.738 0-1.369.631-1 1l6 6a1.414 1.414 0 0 0 2 0l6-6c.369-.369-.262-1-1-1h-1a2 2 0 0 1-2-2V6a2 2 0 0 0-2-2z");
}
</style><path class="pgvk0vbnf"/>`,
		"fallback": "coolicons:arrow-big-down-round",
	});
}

export default Component;
