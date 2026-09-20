import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny7ful4ak.css';
import '../../css/k/k0rgorb3x.css';
import '../../css/d/d2kvgvbvc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGHrMFT39z" class="ny7ful4ak"/><path id="SVGwmoVmNsu" class="k0rgorb3x"/></defs><use href="#SVGHrMFT39z"/><use href="#SVGHrMFT39z"/><use href="#SVGHrMFT39z"/><use href="#SVGHrMFT39z"/><use href="#SVGwmoVmNsu" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGwmoVmNsu" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGwmoVmNsu" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVGwmoVmNsu" clip-rule="evenodd" class="d2kvgvbvc"/>`,
		"fallback": "qlementine-icons:bookmark-crossed-2-16",
	});
}

export default Component;
