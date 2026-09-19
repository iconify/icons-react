import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs3tzmb_z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGD7akPb4b"><path class="fs3tzmb_z"/></mask></defs><path mask="url(#SVGD7akPb4b)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:good",
	});
}

export default Component;
