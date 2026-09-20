import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dy_kfuwor {
  d: path("M112 152a8 8 0 0 0-8 8v28.69L66.34 151a8 8 0 0 1-2.34-5.63V95a32 32 0 1 0-16 0v50.38a23.85 23.85 0 0 0 7 17L92.69 200H64a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8M40 64a16 16 0 1 1 16 16a16 16 0 0 1-16-16m168 97v-50.37a23.85 23.85 0 0 0-7-17L163.31 56H192a8 8 0 0 0 0-16h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0V67.31L189.66 105a8 8 0 0 1 2.34 5.66V161a32 32 0 1 0 16 0m-8 47a16 16 0 1 1 16-16a16 16 0 0 1-16 16");
}

.nyuabcbtd {
  d: path("M80 64a24 24 0 1 1-24-24a24 24 0 0 1 24 24m120 104a24 24 0 1 0 24 24a24 24 0 0 0-24-24");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="nyuabcbtd"/><path class="dy_kfuwor"/></g>`,
		"fallback": "ph:git-diff-duotone",
	});
}

export default Component;
