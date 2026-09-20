import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bd9gczbnq {
  cx: 13px;
  cy: 13px;
  r: 13px;
  fill: currentColor;
}

.fpk9zzybd {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M7 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1");
}

.ft5dv1b6b {
  fill: none;
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGk3xmee4Z"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="fpk9zzybd"/></mask></defs><circle mask="url(#SVGk3xmee4Z)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:equal-circle-filled",
	});
}

export default Component;
