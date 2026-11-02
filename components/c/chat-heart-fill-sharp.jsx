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
		"content": `<style>.p3aq_8h7n {
  fill: currentColor;
  d: path("m7.414 18l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1ZM12 7.398A3.7 3.7 0 0 0 9.625 6.5C8.157 6.5 7 7.486 7 9c.001 1.964 2.294 3.6 3.871 4.52q.335.198.682.374a1 1 0 0 0 .894 0q.347-.176.682-.374q.763-.443 1.471-.97c1.103-.828 2.399-2.058 2.4-3.55c0-1.514-1.157-2.5-2.625-2.5c-.869 0-1.718.335-2.375.898");
}
</style><path class="p3aq_8h7n"/>`,
		"fallback": "coolicons:chat-heart-fill-sharp",
	});
}

export default Component;
