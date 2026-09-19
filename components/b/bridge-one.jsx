import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy4t3zb5c.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGMPVN8ciM"><path class="iy4t3zb5c"/></mask></defs><path mask="url(#SVGMPVN8ciM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bridge-one",
	});
}

export default Component;
