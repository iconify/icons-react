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
		"content": `<style>.o8ye7hbnh {
  fill-rule: evenodd;
  d: path("M12 3a9 9 0 1 1 0 18a9 9 0 0 1 0-18m1.5 7.5L15 12l-4.5 4.5L12 18l6-6l-1.5-1.5zM6 12l3 3l1.5-1.5L9 12l4.5-4.5L12 6z");
}
</style><path clip-rule="evenodd" class="o8ye7hbnh"/>`,
		"fallback": "token-branded:genesis-l1",
	});
}

export default Component;
