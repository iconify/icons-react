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
		"content": `<style>.s-i4f2bwe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.65V17.5l.56-.21l9.13-3.46l.56-.21V8.5h4.5v3.42l.56-.21l2.63-1l.56-.21v10.75H2.75zM14 6.75c-1.25-1 1.25-2 0-4m2.75 4c-1.25-1 1.25-2 0-4");
}
</style><path class="s-i4f2bwe"/>`,
		"fallback": "iconoven:chimney-sharp",
	});
}

export default Component;
