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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.jq7yaln0a {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20v-9h6V4h6v4h6v12zm6 0v-9m6 9V8M3 15h6m0-3h6m0 2h6");
}

.jvnvr5bbe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 4h6v16H9Zm12 4v12h-5V8ZM8 11v9H3v-9Z");
}
</style><g class="ft5dv1b6b"><path class="jvnvr5bbe"/><path class="jq7yaln0a"/></g>`,
		"fallback": "coolicons:chart-bar-stacked-duotone-sharp",
	});
}

export default Component;
