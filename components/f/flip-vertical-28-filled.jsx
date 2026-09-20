import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ck_zz3bxf {
  fill: currentColor;
  d: path("M23.543 2.16A1 1 0 0 1 24 3v9a1 1 0 0 1-1 1H3a1 1 0 0 1-.41-1.912l20-9a1 1 0 0 1 .953.072M7.66 11H22V4.547zM24 25.25a.75.75 0 0 1-1.065.68l-20.5-9.5A.75.75 0 0 1 2.75 15h20.5a.75.75 0 0 1 .75.75z");
}
</style><path class="ck_zz3bxf"/>`,
		"fallback": "fluent:flip-vertical-28-filled",
	});
}

export default Component;
