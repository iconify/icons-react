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
		"content": `<style>.ccym0498h {
  fill: var(--svg-color--009e60, #009e60);
  d: path("M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}

.nbsa7ej7t {
  fill: var(--svg-color--f77f00, #f77f00);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z");
}

.xpy8sjkzl {
  fill: var(--svg-color--eee, #eee);
  d: path("M12 5h12v26H12z");
}
</style><path class="nbsa7ej7t"/><path class="xpy8sjkzl"/><path class="ccym0498h"/>`,
		"fallback": "twemoji:flag-for-cote-divoire",
	});
}

export default Component;
