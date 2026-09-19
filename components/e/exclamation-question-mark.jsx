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
		"content": `<style>.fniw15adr {
  cx: 11px;
  cy: 54.354px;
  rx: 7.664px;
  ry: 7.646px;
}

.ji9tndbll {
  cx: 40.516px;
  cy: 55.566px;
  rx: 6.532px;
  ry: 6.433px;
}

.n1lsf0bnc {
  fill: currentColor;
  fill-rule: evenodd;
}

.taf850b5w {
  d: path("M6.01 42.439h9.979L20 2H2z");
}

.udoc9_btq {
  d: path("M40.249 2.064C28.612 2.789 22.531 9.378 22 21.296h11.74c.147-4.129 2.451-7.215 6.741-7.669c4.211-.447 8.205.555 9.415 3.434c1.307 3.11-1.627 6.724-3.022 8.241c-2.582 2.813-6.775 4.865-8.949 7.901c-2.131 2.973-2.51 6.886-2.674 11.675h10.346c.145-3.062.349-5.995 1.742-7.898c2.266-3.092 5.65-4.541 8.486-6.983c2.709-2.334 5.559-5.147 6.043-9.5C63.319 7.466 52.683 1.289 40.249 2.064");
}
</style><g class="n1lsf0bnc"><path class="taf850b5w"/><ellipse class="fniw15adr"/><path class="udoc9_btq"/><ellipse class="ji9tndbll"/></g>`,
		"fallback": "emojione-monotone:exclamation-question-mark",
	});
}

export default Component;
