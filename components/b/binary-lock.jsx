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
		"content": `<style>.jt7gb5foe {
  d: path("M4.5 10h15v11h-15ZM8 10V7a4 4 0 0 1 8 0v3m-7 4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zzj3t1mgx {
  d: path("M12.75 16a1.75 2.25 0 1 0 3.5 0a1.75 2.25 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="jt7gb5foe"/><path class="zzj3t1mgx"/></g>`,
		"fallback": "uix-sharp:binary-lock",
	});
}

export default Component;
