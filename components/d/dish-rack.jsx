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
		"content": `<style>.ppi8a_g7h {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.75 10q0-5.75 2-5.75t2 5.75q0 2.813-.479 4.25h2.208Q10 12.813 10 10q0-5.75 2-5.75T14 10q0 2.813-.479 4.25h2.208q-.479-1.437-.479-4.25q0-5.75 2-5.75t2 5.75q0 2.813-.479 4.25h.104q3.375 0 3.375 3.375v.25q0 3.375-3.375 3.375H5.125q-3.375 0-3.375-3.375v-.25q0-1.398.989-2.386q.988-.989 2.386-.989h.104Q4.75 12.813 4.75 10");
}
</style><path class="ppi8a_g7h"/>`,
		"fallback": "uix-solid:dish-rack",
	});
}

export default Component;
