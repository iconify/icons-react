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
		"content": `<style>.ej6l47bly {
  fill: var(--svg-color--009a49, #009a49);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z");
}

.x1ep41boo {
  fill: var(--svg-color--009a49, #009a49);
  d: path("M32 5h-8v26h8a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4");
}

.xpy8sjkzl {
  fill: var(--svg-color--eee, #eee);
  d: path("M12 5h12v26H12z");
}
</style><path class="ej6l47bly"/><path class="xpy8sjkzl"/><path class="x1ep41boo"/>`,
		"fallback": "twemoji:flag-for-flag-nigeria",
	});
}

export default Component;
