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
		"content": `<style>.ytq4-pbww {
  fill: currentColor;
  d: path("M9 22V8.775q-2.275-.6-3.637-2.512T4 2h2q0 2.075 1.338 3.538T10.75 7h2.5q.75 0 1.4.275t1.175.8L20.35 12.6l-1.4 1.4L15 10.05V22h-2v-6h-2v6zm1.588-16.588Q10 4.825 10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6t-1.412-.587");
}
</style><path class="ytq4-pbww"/>`,
		"fallback": "material-symbols:emoji-people-outline",
	});
}

export default Component;
