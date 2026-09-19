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
		"content": `<style>.hvxwpgb7s {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.431 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.431 48.568 2 32 2M14.5 50a2 2 0 1 1 .001-4.001A2 2 0 0 1 14.5 50m-.5-7a2 2 0 0 1-2-2V21a2 2 0 0 1 2-2h3.5v24zm7.5 7a2 2 0 1 1 .001-4.001A2 2 0 0 1 21.5 50m7 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 28.5 50m7 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 35.5 50m7 0a2 2 0 1 1 .001-4.001A2 2 0 0 1 42.5 50m-23-7V19H23v-3.903C23 13.389 24.346 12 26 12h12c1.654 0 3 1.389 3 3.097V19h3.5v24zm30 7a2 2 0 1 1 .001-4.001A2 2 0 0 1 49.5 50m2.5-9a2 2 0 0 1-2 2h-3.5V19H50a2 2 0 0 1 2 2z");
}

.weikuzlrq {
  fill: currentColor;
  d: path("M38 14.064H26c-.551 0-1 .463-1 1.032V19h14v-3.903c0-.57-.447-1.033-1-1.033");
}
</style><path class="weikuzlrq"/><path class="hvxwpgb7s"/>`,
		"fallback": "emojione-monotone:baggage-claim",
	});
}

export default Component;
