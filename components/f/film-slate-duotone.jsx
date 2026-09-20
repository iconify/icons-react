import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bo7nuub-x {
  d: path("M216 104H102.09L210 75.51a8 8 0 0 0 5.68-9.84l-8.16-30a15.93 15.93 0 0 0-19.42-11.13L35.81 64.74a15.75 15.75 0 0 0-9.7 7.4a15.5 15.5 0 0 0-1.55 12L32 111.56V200a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a8 8 0 0 0-8-8m-23.84-64l6 22.07l-22.62 6l-28.12-16.24Zm-66.69 17.6l28.12 16.24l-36.94 9.75l-28.12-16.22Zm-79.4 44.62l-6-22.08l26.5-7L94.69 89.4ZM208 200H48v-80h160z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nid5hwbiw {
  d: path("m67.71 64.59l47.79 27.6L40.43 112l-8.16-30a7.76 7.76 0 0 1 5.58-9.52Zm132.13-26.83a7.9 7.9 0 0 0-9.66-5.49l-63.57 16.78l47.79 27.59l33.6-8.87Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="nid5hwbiw"/><path class="bo7nuub-x"/></g>`,
		"fallback": "ph:film-slate-duotone",
	});
}

export default Component;
