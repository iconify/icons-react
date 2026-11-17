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
		"content": `<style>.bhwog2b5s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 21a9 9 0 0 1-9-9a9 9 0 0 1 9-9a9 9 0 0 1 9 9a9 9 0 0 1-9 9");
}

.ft5dv1b6b {
  fill: none;
}

.jq2uokf8p {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m6-5v10m0-9h3a2 2 0 1 1 0 4H9m0 0h4a2 2 0 1 1 0 4H9m4-9v1m0 8v1");
}
</style><g class="ft5dv1b6b"><path class="bhwog2b5s"/><path class="jq2uokf8p"/></g>`,
		"fallback": "coolicons:circle-currency-bitcoin-duotone-sharp",
	});
}

export default Component;
