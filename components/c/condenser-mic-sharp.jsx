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
		"content": `<style>.jqh999btr {
  d: path("M8.25 11H5.5v6.75h13V11h-2.75M12 17.75v3.5m-3 0h6");
}

.re_trpb5a {
  d: path("M8.25 2.75h7.5v12h-7.5zm0 4.25h7.5m-7.5 3.5h7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="re_trpb5a"/><path class="jqh999btr"/></g>`,
		"fallback": "iconoven:condenser-mic-sharp",
	});
}

export default Component;
