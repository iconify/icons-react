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
		"content": `<style>.ake-pca5s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3H8c-.369 0-.369.631 0 1l3 3a1.414 1.414 0 0 0 2 0l3-3c.369-.369.369-1 0-1zm-7 9h2m4 0h2m4 0h2m-7 9H8c-.369 0-.369-.631 0-1l3-3a1.414 1.414 0 0 1 2 0l3 3c.369.369.369 1 0 1z");
}

.ft5dv1b6b {
  fill: none;
}

.i4szlab-b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 3c.369 0 .369.631 0 1l-3 3a1.415 1.415 0 0 1-2 0L8 4c-.369-.369-.369-1 0-1Zm0 18H8c-.369 0-.369-.631 0-1l3-3a1.415 1.415 0 0 1 2 0l3 3c.369.369.369 1 0 1");
}
</style><g class="ft5dv1b6b"><path class="i4szlab-b"/><path class="ake-pca5s"/></g>`,
		"fallback": "coolicons:flip-vertical-duotone",
	});
}

export default Component;
