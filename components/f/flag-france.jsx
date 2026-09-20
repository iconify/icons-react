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
		"content": `<style>.t6up7bbuc {
  fill: var(--svg-color--ed2939, #ed2939);
  d: path("M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z");
}

.x6l14xyck {
  fill: var(--svg-color--002495, #002495);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z");
}

.xpy8sjkzl {
  fill: var(--svg-color--eee, #eee);
  d: path("M12 5h12v26H12z");
}
</style><path class="t6up7bbuc"/><path class="x6l14xyck"/><path class="xpy8sjkzl"/>`,
		"fallback": "twemoji:flag-france",
	});
}

export default Component;
