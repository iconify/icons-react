import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fja0yqbws.css';
import '../../css/v/vfequbwcl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect transform="rotate(180 8.25 8.25)" class="fja0yqbws"/><path class="vfequbwcl"/></g>`,
		"fallback": "streamline:image-picture-gallery-pages-filter-picture-pagination-image",
	});
}

export default Component;
