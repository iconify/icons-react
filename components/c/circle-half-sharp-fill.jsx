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
		"content": `<style>.es1__4bst {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM12 19C15.866 19 19 15.866 19 12C19 8.134 15.866 5 12 5L12 19Z");
}
</style><path clip-rule="evenodd" class="es1__4bst"/>`,
		"fallback": "keyline-icons:circle-half-sharp-fill",
	});
}

export default Component;
