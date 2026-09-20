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
		"content": `<style>.my5a9-bfk {
  fill: currentColor;
  d: path("M16 19L5 12l11-7z");
}
</style><path class="my5a9-bfk"/>`,
		"fallback": "material-symbols:arrow-back-2",
	});
}

export default Component;
