import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va4l-rdig.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfIrXF2an"><path class="va4l-rdig"/></mask></defs><path mask="url(#SVGfIrXF2an)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:facebook",
	});
}

export default Component;
