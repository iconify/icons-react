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

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}

.puz9tcwyf {
  d: path("M7.5 7v6h10.159l-1.197-1.71a2.25 2.25 0 0 1 0-2.58L17.659 7zm-1-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.08a1 1 0 0 0 .819-1.573L18.1 10.143a.25.25 0 0 1 0-.286l2.3-3.284A1 1 0 0 0 19.579 5z");
}

.vomx7qbtd {
  d: path("M6.5 6a1 1 0 0 1 1 1v13a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGJwOgFdvm"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="puz9tcwyf"/><path class="vomx7qbtd"/></g></mask></defs><circle mask="url(#SVGJwOgFdvm)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:flag-straight-circle-filled",
	});
}

export default Component;
