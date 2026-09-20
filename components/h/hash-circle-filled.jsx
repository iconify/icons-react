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

.ec_fit1mn {
  d: path("M6 10.25a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 5.5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1");
}

.ft5dv1b6b {
  fill: none;
}

.k4rlholep {
  d: path("M10.833 6.004a1 1 0 0 1 .914 1.08l-1 12a1 1 0 1 1-1.994-.167l1-12a1 1 0 0 1 1.08-.913m5.5 0a1 1 0 0 1 .914 1.08l-1 12a1 1 0 0 1-1.993-.167l1-12a1 1 0 0 1 1.08-.913");
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGOu5HjcFg"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="ec_fit1mn"/><path class="k4rlholep"/></g></mask></defs><circle mask="url(#SVGOu5HjcFg)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:hash-circle-filled",
	});
}

export default Component;
