import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2-13jbdu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGGJR8obeK"><path class="o2-13jbdu"/></mask></defs><path mask="url(#SVGGJR8obeK)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:five",
	});
}

export default Component;
