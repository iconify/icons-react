import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u9t-kcb2k {
  fill: currentColor;
  d: path("M.584 2.223a.5.5 0 0 1 .693-.14l1.5 1.001a.5.5 0 0 1-.554.832l-1.5-1a.5.5 0 0 1-.139-.693M8 2a4.5 4.5 0 0 0-4.5 4.5v2.401l-.964 2.413A.5.5 0 0 0 3 12h10a.5.5 0 0 0 .464-.685L12.5 8.9V6.5A4.5 4.5 0 0 0 8 2m0 12.5A2 2 0 0 1 6.063 13h3.874A2 2 0 0 1 8 14.5m6.723-12.416a.5.5 0 0 1 .554.832l-1.5 1a.5.5 0 0 1-.554-.832zM0 6.5A.5.5 0 0 1 .5 6H2a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5M15.5 6a.5.5 0 0 1 0 1H14a.5.5 0 0 1 0-1z");
}
</style><path class="u9t-kcb2k"/>`,
		"fallback": "fluent:alert-on-16-filled",
	});
}

export default Component;
