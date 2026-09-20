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
		"content": `<style>.ia39kttwv {
  fill: currentColor;
  d: path("M2.02 19L12 2l10 17zm9.48-3.404h1v-1.942h1.98v-1H12.5V10.73h-1v1.923H9.539v1H11.5z");
}
</style><path class="ia39kttwv"/>`,
		"fallback": "material-symbols-light:add-triangle",
	});
}

export default Component;
