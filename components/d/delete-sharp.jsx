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
		"content": `<style>.fbh9pl0-x {
  fill: currentColor;
  d: path("M9 17h2V8H9zm4 0h2V8h-2zm-8 4V6H4V4h5V3h6v1h5v2h-1v15z");
}
</style><path class="fbh9pl0-x"/>`,
		"fallback": "material-symbols:delete-sharp",
	});
}

export default Component;
