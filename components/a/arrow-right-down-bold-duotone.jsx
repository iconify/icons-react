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
		"content": `<style>.lqz0ivbkk {
  fill: currentColor;
  d: path("M5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L13.5 12.4393L12.4393 13.5L5.46967 6.53033Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.zl1y521md {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.4697 8.46969C17.6842 8.25519 18.0067 8.19103 18.287 8.30711C18.5673 8.4232 18.75 8.69668 18.75 9.00002V18C18.75 18.4142 18.4142 18.75 18 18.75L8.99999 18.75C8.69664 18.75 8.42317 18.5673 8.30708 18.287C8.191 18.0068 8.25516 17.6842 8.46966 17.4697L17.4697 8.46969Z");
}
</style><path clip-rule="evenodd" class="zl1y521md"/><path class="lqz0ivbkk"/>`,
		"fallback": "solar:arrow-right-down-bold-duotone",
	});
}

export default Component;
