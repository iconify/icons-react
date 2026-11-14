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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v8gh40b8o {
  d: path("m8.818 12.354l2.828 2.828l-6.01 6.01l-2.828-2.828Z");
}

.yq5tygk5i {
  d: path("M14.828 3.515L11.293 7.05l-1.061 6.718l6.718-1.061l3.535-3.535m-5.657-5.657l5.657 5.657");
}
</style><g class="ulnmmdpxh"><path class="v8gh40b8o"/><path class="yq5tygk5i"/></g>`,
		"fallback": "uix-sharp:floss-pick",
	});
}

export default Component;
