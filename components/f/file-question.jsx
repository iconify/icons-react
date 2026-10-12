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
		"content": `<style>.kl6ms1bhr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75v3.5a2 2 0 0 0 2 2h3.5M10 12.5a2 2 0 1 1 2.75 1.85c-.45.2-.75.6-.75 1.1v.3");
}

.sdppemtic {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yjt4258yu {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.75 2.75h-6.5a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h9.5a2.5 2.5 0 0 0 2.5-2.5V8.25Z");
}
</style><g class="y9tr6bcfx"><path class="yjt4258yu"/><path class="kl6ms1bhr"/><path class="sdppemtic"/></g>`,
		"fallback": "iconoven:file-question",
	});
}

export default Component;
