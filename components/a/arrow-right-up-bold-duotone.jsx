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
		"content": `<style>.g95h_vbdc {
  fill: currentColor;
  d: path("M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L13.5 11.5607L12.4393 10.5L5.46967 17.4697Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.mp8cnibtf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17.4697 15.5303C17.6842 15.7448 18.0067 15.809 18.287 15.6929C18.5673 15.5768 18.75 15.3033 18.75 15V6C18.75 5.58579 18.4142 5.25 18 5.25L8.99999 5.25C8.69664 5.25 8.42317 5.43273 8.30708 5.71299C8.191 5.99324 8.25516 6.31583 8.46966 6.53033L17.4697 15.5303Z");
}
</style><path clip-rule="evenodd" class="mp8cnibtf"/><path class="g95h_vbdc"/>`,
		"fallback": "solar:arrow-right-up-bold-duotone",
	});
}

export default Component;
