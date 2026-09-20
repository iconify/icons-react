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

.cx5okztkf {
  d: path("M15.828 10.172a1 1 0 0 1 0 1.414l-5.656 5.657a1 1 0 0 1-1.415-1.415l5.657-5.656a1 1 0 0 1 1.414 0");
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

.lu6fefb6v {
  d: path("M17.097 15.646a1 1 0 0 1-1.086-.905l-.471-5.186a1 1 0 1 1 1.991-.181l.472 5.185a1 1 0 0 1-.906 1.087");
}

.qqy4j3b6d {
  d: path("M10.354 8.903a1 1 0 0 1 1.087-.906l5.185.472a1 1 0 1 1-.181 1.991l-5.186-.47a1 1 0 0 1-.905-1.087");
}
</style><g class="ft5dv1b6b"><defs><mask id="SVGprv5hdus"><path class="k5-vjlrin"/><g clip-rule="evenodd" class="kvn14gsjy"><path class="qqy4j3b6d"/><path class="lu6fefb6v"/><path class="cx5okztkf"/></g></mask></defs><circle mask="url(#SVGprv5hdus)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:arrow-up-right-circle-filled",
	});
}

export default Component;
