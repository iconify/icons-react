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
		"content": `<style>.f-n1-qkzr {
  fill: var(--svg-color--fcfefb, #fcfefb);
  d: path("M6.6 11.045c0-1.02.36-2.22 1.332-3.12L12 12l-5.4 5.4z");
}

.ft5dv1b6b {
  fill: none;
}

.gge9dybkq {
  fill: var(--svg-color--d3ddff, #d3ddff);
  d: path("M17.4 17.4H6.6L12 12z");
}

.im5kcdcno {
  fill: var(--svg-color--fcfefb, #fcfefb);
  d: path("M17.4 17.4L21 21V3H3l4.932 4.932C8.772 7.152 10.08 6.6 12 6.6c4.128 0 5.4 2.544 5.4 4.446z");
}

.slgiwbb7z {
  fill: var(--svg-color--373737, #373737);
  d: path("M7.932 7.932L3 3v18h18l-3.6-3.6H6.6v-6.354c0-1.02.36-2.22 1.332-3.12z");
}
</style><g class="ft5dv1b6b"><path class="slgiwbb7z"/><path class="f-n1-qkzr"/><path class="gge9dybkq"/><path class="im5kcdcno"/></g>`,
		"fallback": "token-branded:arch",
	});
}

export default Component;
