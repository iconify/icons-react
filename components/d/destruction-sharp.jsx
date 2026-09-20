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
		"content": `<style>.mb7hsfb7p {
  fill: currentColor;
  d: path("M3 22v-8h18v8zm3.525-9.5L1.5 9.65l6-1l-1.625-5.875L10.85 6.3l3-5.3l1 6l5.875-1.625L17.2 10.35L21 12.5z");
}
</style><path class="mb7hsfb7p"/>`,
		"fallback": "material-symbols:destruction-sharp",
	});
}

export default Component;
