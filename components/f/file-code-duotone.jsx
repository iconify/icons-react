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
		"content": `<style>.bk2fylb6s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9m-6-6l6 6m-6-6v4a2 2 0 0 0 2 2h4m-5 4l2 2l-2 2m-4 0l-2-2l2-2");
}

.ft5dv1b6b {
  fill: none;
}

.tn79-jbki {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 3l.034.034q-.01-.01-.022-.004a.02.02 0 0 0-.012.018V7a2 2 0 0 0 2 2h3.952a.02.02 0 0 0 .018-.012q.006-.012-.004-.022L19 9v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z");
}
</style><g class="ft5dv1b6b"><path class="tn79-jbki"/><path class="bk2fylb6s"/></g>`,
		"fallback": "coolicons:file-code-duotone",
	});
}

export default Component;
