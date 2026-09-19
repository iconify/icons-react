import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv5l2_bto.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPUGGMpUY"><path class="nv5l2_bto"/></mask></defs><path mask="url(#SVGPUGGMpUY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:align-bottom-two",
	});
}

export default Component;
