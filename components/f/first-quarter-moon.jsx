import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cvh3f0cyc {
  fill: var(--svg-color--fcc21b, #fcc21b);
  d: path("M64-17.32h88.89v158.99H64z");
}

.ehej3-bmx {
  fill: var(--svg-color--2f2f2f, #2f2f2f);
}

.fb7-dzb0z {
  d: path("M127.76 64c0 35.22-28.54 63.77-63.77 63.77C28.79 127.76.24 99.22.24 64C.24 28.79 28.79.24 64 .24c35.22 0 63.76 28.55 63.76 63.76");
}
</style><defs><path id="SVGw8SxOedq" class="fb7-dzb0z"/></defs><use href="#SVGw8SxOedq" class="ehej3-bmx"/><clipPath id="SVGnfAYDbzZ"><use href="#SVGw8SxOedq"/></clipPath><path clip-path="url(#SVGnfAYDbzZ)" class="cvh3f0cyc"/>`,
		"fallback": "noto-v1:first-quarter-moon",
	});
}

export default Component;
