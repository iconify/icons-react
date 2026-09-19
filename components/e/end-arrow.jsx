import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hdrtipley {
  fill: currentColor;
  d: path("M3 18L19 2v10h42v12H19v10zm22 25.383V40H13v22h12v-3.383h-9v-5.926h9v-3.382h-9v-5.926zM51 40h-6v22h6c3.308 0 6-2.848 6-6.348v-9.307C57 42.848 54.308 40 51 40m3 15.652c0 1.633-1.346 2.965-3 2.965h-3V43.383h3c1.654 0 3 1.33 3 2.963zm-22-7.949L37.848 62H41V40h-3v14.295L32.152 40H29v22h3z");
}
</style><path class="hdrtipley"/>`,
		"fallback": "emojione-monotone:end-arrow",
	});
}

export default Component;
