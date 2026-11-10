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
		"content": `<style>.akqm_bc5i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15 3C15.288 3 15.563 3.12 15.753 3.34L22.751 11.34C23.08 11.72 23.082 12.28 22.753 12.66L15.753 20.66C15.563 20.88 15.288 21 15 21H2C1.448 21 1 20.55 1 20V4C1 3.45 1.448 3 2 3H15ZM10 10.59L7.414 8L6 9.41L8.586 12L6 14.59L7.414 16L10 13.41L12.586 16L14 14.59L11.414 12L14 9.41L12.586 8L10 10.59Z");
}
</style><path clip-rule="evenodd" class="akqm_bc5i"/>`,
		"fallback": "keyline-icons:delete-forward-sharp-fill",
	});
}

export default Component;
