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
		"content": `<style>.e-os3obld {
  fill: currentColor;
  d: path("M11 22V9H2l10-7l10 7h-9v13zm-8 0v-5.25l-.8-4.4L4.15 12l.75 4H9v6H7v-4H5v4zm12 0v-6h4.1l.75-4l1.95.35l-.8 4.4V22h-2v-4h-2v4z");
}
</style><path class="e-os3obld"/>`,
		"fallback": "material-symbols:deck-sharp",
	});
}

export default Component;
