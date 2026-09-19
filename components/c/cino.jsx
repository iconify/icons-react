import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d3j5igb8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: var(--svg-opacity--0-9, 0.9);
}

.g7kl44wbc {
  d: path("M29.033 31.56c10.677-2.244 15.045-14.617 7.862-22.273c-2.25-2.394-5.344-3.918-8.72-4.287");
}

.os4ppibgb {
  d: path("M18.5 24.079c-3.916 10.183 4.1 20.571 14.43 18.7c3.231-.587 6.192-2.358 8.336-4.992");
}

.prxlgfbiw {
  d: path("M29.752 18.976c-7.98-7.44-20.613-3.89-22.74 6.39c-.663 3.217-.127 6.625 1.514 9.598");
}
</style><g class="d3j5igb8c"><path class="prxlgfbiw"/><path class="g7kl44wbc"/><path class="os4ppibgb"/></g>`,
		"fallback": "arcticons:cino",
	});
}

export default Component;
