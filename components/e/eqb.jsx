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
		"content": `<style>.qy6mjv50d {
  fill: var(--svg-color--4bff00, #4bff00);
  fill-rule: evenodd;
  d: path("M12 18.75a6.75 6.75 0 0 0 1.125-13.404v4.078a2.812 2.812 0 1 1-2.25 0V5.346A6.75 6.75 0 0 0 12 18.75M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18");
}
</style><path clip-rule="evenodd" class="qy6mjv50d"/>`,
		"fallback": "token-branded:eqb",
	});
}

export default Component;
