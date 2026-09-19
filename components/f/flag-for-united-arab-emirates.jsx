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
		"content": `<style>.hwk5csx9o {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-9 40v16.564a28 28 0 0 1-2-.746V6.182c.653-.275 1.322-.52 2-.746V22h35.213C59.365 25.062 60 28.541 60 32s-.635 6.938-1.787 10z");
}
</style><path class="hwk5csx9o"/>`,
		"fallback": "emojione-monotone:flag-for-united-arab-emirates",
	});
}

export default Component;
