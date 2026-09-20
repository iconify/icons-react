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

.cxfni2ljt {
  cx: 14.5px;
  cy: 4.5px;
  r: 1.5px;
}

.ft5dv1b6b {
  fill: none;
}

.i8n8cc_hw {
  fill-rule: evenodd;
  d: path("M3 4h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m1 4v8h12V8z");
}

.ivjvz2eii {
  fill: var(--svg-color--000, #000);
}

.k5-vjlrin {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h26v26H0z");
}

.odkqjcchh {
  cx: 6.5px;
  cy: 10.5px;
  r: 1.5px;
}

.uq5fhnb9e {
  cx: 5.5px;
  cy: 4.5px;
  r: 1.5px;
}
</style><g class="ft5dv1b6b"><defs><mask id="SVG5HTafwrH"><path class="k5-vjlrin"/><g transform="translate(3 3)" class="ivjvz2eii"><path clip-rule="evenodd" class="i8n8cc_hw"/><circle class="odkqjcchh"/><circle class="uq5fhnb9e"/><circle class="cxfni2ljt"/></g></mask></defs><circle mask="url(#SVG5HTafwrH)" class="bd9gczbnq"/></g>`,
		"fallback": "pepicons-pop:calendar-circle-filled",
	});
}

export default Component;
