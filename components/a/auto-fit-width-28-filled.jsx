import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p4w1hnb_t {
  fill: currentColor;
  d: path("M4 6a1 1 0 0 1 .995.897L5 7v14a1 1 0 1 1-2 0V7l.005-.103A1 1 0 0 1 4 6m20 0a1 1 0 0 1 .995.897L25 7v14a1 1 0 1 1-2 0V7l.005-.103A1 1 0 0 1 24 6m-7.707 4.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 .068 1.338l-.068.076l-3 3l-.076.068a1 1 0 0 1-1.406-1.406l.068-.076L17.586 15h-7.172l1.293 1.293a1 1 0 1 1-1.414 1.414l-3-3l-.068-.076a1 1 0 0 1 .068-1.338l3-3l.076-.068a1 1 0 0 1 1.406 1.406l-.068.076L10.414 13h7.172l-1.293-1.293a1 1 0 0 1 0-1.414");
}
</style><path class="p4w1hnb_t"/>`,
		"fallback": "fluent:auto-fit-width-28-filled",
	});
}

export default Component;
