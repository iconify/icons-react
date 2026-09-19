import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gob6mbc5l {
  cx: 32px;
  cy: 32px;
  r: 17.3px;
  fill: var(--svg-color--fff, #fff);
}

.olcs33-wc {
  cx: 35.5px;
  cy: 32px;
  r: 10.4px;
  fill: var(--svg-color--fff, #fff);
}

.u5qnf2big {
  cx: 32px;
  cy: 32px;
  r: 13px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}

.xmu-6xbsa {
  fill: var(--svg-color--ed4c5c, #ed4c5c);
  d: path("m38.4 32l3.4-4.6l-5.4 1.8l-3.3-4.6v5.7L27.7 32l5.4 1.7v5.7l3.3-4.6l5.4 1.8z");
}

.yvb0blvjs {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--ed4c5c, #ed4c5c);
}
</style><circle class="yvb0blvjs"/><circle class="gob6mbc5l"/><circle class="u5qnf2big"/><circle class="olcs33-wc"/><path class="xmu-6xbsa"/>`,
		"fallback": "emojione:flag-for-tunisia",
	});
}

export default Component;
