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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.jfz9jnbqi {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M18.546 18.45a2.39 2.39 0 0 1-3.287.893l-8.93-5.23a2.46 2.46 0 0 1-.88-3.333a2.39 2.39 0 0 1 3.286-.893l8.93 5.229a2.46 2.46 0 0 1 .88 3.333");
}

.nl3qt7q-f {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M18.552 5.55a2.39 2.39 0 0 0-3.287-.893l-8.93 5.23a2.46 2.46 0 0 0-.88 3.333a2.39 2.39 0 0 0 3.286.893l8.93-5.229a2.46 2.46 0 0 0 .88-3.333");
}

.oqffwvq2c {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M8.572 10.173a2.065 2.065 0 0 0-2.842.772a2.127 2.127 0 0 0 .761 2.883l8.93 5.229a2.065 2.065 0 0 0 2.843-.773a2.127 2.127 0 0 0-.762-2.882zm.326-.572l8.93 5.23c1.306.764 1.754 2.458 1 3.783a2.71 2.71 0 0 1-3.732 1.014L6.166 14.4c-1.306-.765-1.754-2.46-1-3.784A2.71 2.71 0 0 1 8.898 9.6");
}

.py7ktqbvf {
  fill: var(--svg-color--fff, #fff);
  d: path("M0 0h24v24H0z");
}

.t-64llb7c {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M15.103 4.372a2.71 2.71 0 0 1 3.73 1.014c.755 1.325.307 3.019-1 3.784l-8.93 5.23a2.71 2.71 0 0 1-3.73-1.015c-.755-1.325-.307-3.02 1-3.784zm3.167 1.344a2.065 2.065 0 0 0-2.842-.773l-8.93 5.23a2.127 2.127 0 0 0-.762 2.882m-.282.165l.282-.165a2.065 2.065 0 0 0 2.842.773l8.93-5.23a2.127 2.127 0 0 0 .762-2.882");
}

.xmmk-rbpm {
  fill: var(--svg-color--08adcc, #08adcc);
  d: path("M24 0H0v24h24z");
}
</style><g class="ft5dv1b6b"><g clip-path="url(#SVGHcSWxdhd)"><path class="xmmk-rbpm"/><path clip-rule="evenodd" class="nl3qt7q-f"/><path clip-rule="evenodd" class="t-64llb7c"/><path clip-rule="evenodd" class="jfz9jnbqi"/><path clip-rule="evenodd" class="oqffwvq2c"/></g><defs><clipPath id="SVGHcSWxdhd"><path class="py7ktqbvf"/></clipPath></defs></g>`,
		"fallback": "token-branded:clave-background",
	});
}

export default Component;
