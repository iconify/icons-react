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
		"content": `<style>.sp0wpi5lx {
  fill: currentColor;
  d: path("M9.827 14.692V13h.885v.808h2.615v-1.5h-3.5v-3h4.385V11h-.885v-.808h-2.615v1.5h3.5v3zm6.404 0V13h.884v.808h2.616v-1.5h-3.5v-3h4.384V11h-.884v-.808h-2.616v1.5h3.5v3zm-12.808 0V9.308h4.385V11h-.885v-.808H4.308v3.616h2.615V13h.885v1.692z");
}
</style><path class="sp0wpi5lx"/>`,
		"fallback": "material-symbols-light:css-outline-sharp",
	});
}

export default Component;
