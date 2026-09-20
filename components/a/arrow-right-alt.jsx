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
		"content": `<style>.p1cfj1pdo {
  fill: currentColor;
  d: path("m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z");
}
</style><path class="p1cfj1pdo"/>`,
		"fallback": "material-symbols:arrow-right-alt",
	});
}

export default Component;
