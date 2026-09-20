import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.kh3fznufa {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h240v300H0z");
}

.l414w26_n {
  fill: var(--svg-color--211e1e, #211e1e);
  d: path("M180 60H60v180h120zm60 240H0V0h240z");
}

.pd8k52-vn {
  fill: var(--svg-color--cfcecd, #cfcecd);
  d: path("M180 240H60V120h120z");
}

.yceg7byfa {
  fill: var(--svg-color--fff, #fff);
  d: path("M240 0H0v300h240z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGeP5Myl1x)" transform="translate(4.8 2)scale(.09333)"><mask id="SVG6J7nseBa" width="240" height="300" x="0" y="0" maskUnits="userSpaceOnUse"><path class="yceg7byfa"/></mask><g mask="url(#SVG6J7nseBa)"><path class="pd8k52-vn"/><path class="l414w26_n"/></g></g><defs><clipPath id="SVGeP5Myl1x"><path class="kh3fznufa"/></clipPath></defs></g>`,
		"fallback": "vscode-icons:file-type-light-opencode",
	});
}

export default Component;
