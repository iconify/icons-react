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
		"content": `<style>.me2b8qb6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.35 16.34l3.3-6.18l.35-.66l.53.53l2.44 2.44l.53.53l-.66.35l-6.18 3.3L6 17zm5.4-5.09L14 9m.2-.57l1.1-3.11l.2-.57l.42.42l1.91 1.91l.42.42l-.57.2l-3.11 1.1L14 9zM4.25 20c1.5-1 3 .25 4.5-.5s3 .5 4.5-.25");
}
</style><path class="me2b8qb6t"/>`,
		"fallback": "iconoven:henna-cone-sharp",
	});
}

export default Component;
