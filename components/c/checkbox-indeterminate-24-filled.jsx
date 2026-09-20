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
		"content": `<style>.d5stz657c {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM5 6.25C5 5.56 5.56 5 6.25 5h11.5c.69 0 1.25.56 1.25 1.25v11.5c0 .69-.56 1.25-1.25 1.25H6.25C5.56 19 5 18.44 5 17.75zm2.5.25a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z");
}
</style><path class="d5stz657c"/>`,
		"fallback": "fluent:checkbox-indeterminate-24-filled",
	});
}

export default Component;
