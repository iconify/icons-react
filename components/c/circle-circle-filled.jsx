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

.ft5dv1b6b {
  fill: none;
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.rk4yuk01n {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
  d: path("M13 8.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M6.5 13a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGjKzyqeyV"><path class="k5-vjlrin"/><path clip-rule="evenodd" class="rk4yuk01n"/></mask></defs><circle mask="url(#SVGjKzyqeyV)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:circle-circle-filled",
	});
}

export default Component;
