import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":263};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gfls3u3mg {
  fill: var(--svg-color--6464e2, #6464e2);
  d: path("M181.301 223.92H74.359l-53.525-92.69l53.525-92.69h106.942l53.525 92.69zM93.18 191.283h69.3l34.705-60.053l-34.705-60.053h-69.3L58.584 131.23z");
}

.kseshgbmx {
  fill: var(--svg-color--3a33d1, #3a33d1);
  d: path("M100.034 262.106L.598 172.57L28.45 41.694L155.626.354l99.436 89.535l-27.851 130.876zm-48.086-106.18l59.291 53.307l75.828-24.695l16.645-78.004l-59.291-53.417l-75.828 24.805z");
}
</style><path class="kseshgbmx"/><path class="gfls3u3mg"/>`,
		"fallback": "logos:eslint-old",
	});
}

export default Component;
