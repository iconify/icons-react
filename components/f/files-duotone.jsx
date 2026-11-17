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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.mrds6kbep {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-8M8 6l5 5M8 6v4a1 1 0 0 0 1 1h4m-2-8h5m0 0l5 5m-5-5v4a1 1 0 0 0 1 1h4m0 0v8a2 2 0 0 1-2 2h-2");
}

.r4vt1tb7t {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m8 6l.034.034q-.01-.01-.022-.004A.02.02 0 0 0 8 6.048V10a1 1 0 0 0 1 1h3.952a.02.02 0 0 0 .018-.012q.005-.013-.004-.022L13 11v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z");
}
</style><g class="ft5dv1b6b"><path class="r4vt1tb7t"/><path class="mrds6kbep"/></g>`,
		"fallback": "coolicons:files-duotone",
	});
}

export default Component;
