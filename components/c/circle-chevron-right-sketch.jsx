import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9s-i6b7w.css';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xr_-rdb-r.css';
import '../../css/i/ig162ubki.css';
import '../../css/g/gpiccu5ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGDMp0kepX" class="y9s-i6b7w"/></defs><g class="tczw_hbsg"><path class="wm-deco xr_-rdb-r"/><use href="#SVGDMp0kepX" class="ig162ubki wm-k"/><use href="#SVGDMp0kepX" class="wm-k"/><path class="gpiccu5ma wm-a"/></g>`,
		"fallback": "withicons:circle-chevron-right-sketch",
	});
}

export default Component;
