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
		"content": `<style>.egqobuxxj {
  fill: currentColor;
  d: path("M4 18V6v4.7v-.7zm6.7 2H2V4h8l2 2h10v6.125q-.425-.45-.925-.8T20 10.7V8h-8.825l-2-2H4v12h6.075q.075.525.238 1.025T10.7 20m9.838-6.538Q22 14.926 22 17t-1.463 3.538T17 22t-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463M16.5 20h1v-4h-1zm.85-5.15q.15-.15.15-.35t-.15-.35T17 14t-.35.15t-.15.35t.15.35t.35.15t.35-.15");
}
</style><path class="egqobuxxj"/>`,
		"fallback": "material-symbols:folder-info-outline-sharp",
	});
}

export default Component;
