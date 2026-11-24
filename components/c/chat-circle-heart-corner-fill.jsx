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
		"content": `<style>.o4v--37yo {
  fill: currentColor;
  d: path("M10 9a.997.997 0 0 0-1 1v10a1 1 0 0 1-.804.981l-5 1a1 1 0 0 1-1.177-1.177l.935-4.673a9.943 9.943 0 0 1 17.94-8.578A1 1 0 0 1 20 9Zm7 5.398a3.7 3.7 0 0 1 2.375-.898c1.468 0 2.625.986 2.625 2.5c-.001 1.964-2.294 3.6-3.871 4.52q-.335.198-.682.374a1 1 0 0 1-.894 0A15.4 15.4 0 0 1 14.4 19.55c-1.103-.828-2.399-2.058-2.4-3.55c0-1.514 1.157-2.5 2.625-2.5c.869 0 1.718.335 2.375.898");
}
</style><path class="o4v--37yo"/>`,
		"fallback": "coolicons:chat-circle-heart-corner-fill",
	});
}

export default Component;
