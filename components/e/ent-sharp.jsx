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
		"content": `<style>.qa69ei1rl {
  fill: currentColor;
  d: path("M7 21v-3.762q-1.425-1.3-2.212-2.922T4 10.981q0-3.327 2.337-5.654Q8.673 3 12 3q2.702 0 4.884 1.645t2.83 4.25L20.987 14H18v5h-4v2h-3.304l.568-5.5H14.5v-1h-3.133l.398-3.77h4.812v-1h-5.713L9.696 21z");
}
</style><path class="qa69ei1rl"/>`,
		"fallback": "material-symbols-light:ent-sharp",
	});
}

export default Component;
