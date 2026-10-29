import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9s-i6b7w.css';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gue9il9nv.css';
import '../../css/i/ig162ubki.css';
import '../../css/v/vdsp1sbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGDMp0kepX" class="y9s-i6b7w"/></defs><g class="tczw_hbsg"><path class="gue9il9nv wm-deco"/><use href="#SVGDMp0kepX" class="ig162ubki wm-k"/><use href="#SVGDMp0kepX" class="wm-k"/><path class="vdsp1sbpv wm-a"/></g>`,
		"fallback": "withicons:circle-chevron-down-sketch",
	});
}

export default Component;
