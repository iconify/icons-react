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
		"content": `<style>.lno49ulbh {
  fill: currentColor;
  d: path("M61.088 19.088c-4.482-12.049-16.152-11.637-23.15-7.349l-5.376 11.288l9.953-.927l-10.249 13.159l8.429-2.15l-5.285 20.89l-1.643-14.132l-11.861 2.543l9.072-14.445l-7.822-1.139l5.381-12.364c-6.404-6.39-22.973-7.569-26.209 7.755c-3.854 18.253 27.348 29.586 32.927 32.712l-.011.071l.066-.043c.023.014.055.03.078.043l.002-.095c8.434-5.432 31.45-20.359 25.698-35.817");
}
</style><path class="lno49ulbh"/>`,
		"fallback": "emojione-monotone:broken-heart",
	});
}

export default Component;
