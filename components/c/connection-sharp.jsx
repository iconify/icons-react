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
		"content": `<style>.f1cj5wo7i {
  cx: 19.25px;
  cy: 15.25px;
  r: 2px;
}

.iqas_ll2b {
  d: path("M2.75 21.25V19.5h4v1.75");
}

.nev2nabhe {
  cx: 4.75px;
  cy: 15.25px;
  r: 2px;
}

.r_2ezabni {
  d: path("M9 12.75c0-1 1.35-1.75 3-1.75s3 .75 3 1.75");
}

.upylgbkbq {
  d: path("M17.25 21.25V19.5h4v1.75");
}

.wv5f_1brg {
  cx: 12px;
  cy: 5.25px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="wv5f_1brg"/><path class="r_2ezabni"/><circle class="nev2nabhe"/><path class="iqas_ll2b"/><circle class="f1cj5wo7i"/><path class="upylgbkbq"/></g>`,
		"fallback": "iconoven:connection-sharp",
	});
}

export default Component;
