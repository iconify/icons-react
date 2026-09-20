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

.cthwv6vsn {
  d: path("M10.172 10.172a1 1 0 0 1 1.414 0l5.657 5.656a1 1 0 0 1-1.415 1.415l-5.656-5.657a1 1 0 0 1 0-1.414");
}

.ft5dv1b6b {
  fill: none;
}

.jxosxcckr {
  d: path("M15.646 8.903a1 1 0 0 1-.905 1.086l-5.186.471a1 1 0 0 1-.181-1.991l5.185-.472a1 1 0 0 1 1.087.906");
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.kvn14gsjy {
  fill: var(--svg-color--000, #000);
  fill-rule: evenodd;
}

.rvkxepbjw {
  d: path("M8.903 15.646a1 1 0 0 1-.906-1.087l.472-5.185a1 1 0 0 1 1.991.181l-.471 5.186a1 1 0 0 1-1.086.905");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGEg1PWdYR"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="rvkxepbjw"/><path class="jxosxcckr"/><path class="cthwv6vsn"/></g></mask></defs><circle mask="url(#SVGEg1PWdYR)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:arrow-up-left-circle-filled",
	});
}

export default Component;
