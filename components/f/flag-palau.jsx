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
		"content": `<style>.b-ywjgbde {
  fill: var(--svg-color--4aadd6, #4aadd6);
  d: path("M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}

.e1d3tjb9v {
  cx: 14.8px;
  cy: 18px;
  r: 8px;
  fill: var(--svg-color--ffde00, #ffde00);
}
</style><path class="b-ywjgbde"/><circle class="e1d3tjb9v"/>`,
		"fallback": "twemoji:flag-palau",
	});
}

export default Component;
