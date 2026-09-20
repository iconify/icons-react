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
		"content": `<style>.u9nf5jtkl {
  fill: currentColor;
  d: path("m10.866 10.116l-8-5.231v10.5q0 .269.173.442T3.48 16h10.115v1H1.866V3h18v6.385h-1v-4.5zm0-1.116l7.692-5H3.173zm8 11.962q-1.362 0-2.316-.954t-.954-2.316v-4.5q0-.791.547-1.338t1.338-.546t1.338.546q.547.547.547 1.338v4.5h-1v-4.5q0-.373-.256-.628q-.256-.256-.63-.256t-.628.256t-.256.628v4.5q0 .936.668 1.603q.667.667 1.605.667t1.601-.667q.665-.667.665-1.603v-4h1v4q0 1.362-.954 2.316t-2.316.954m-16-16.077V4v12z");
}
</style><path class="u9nf5jtkl"/>`,
		"fallback": "material-symbols-light:attach-email-outline-sharp",
	});
}

export default Component;
