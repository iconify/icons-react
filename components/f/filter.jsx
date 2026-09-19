import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4wis2bvm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGsu0PwdKx"><path class="x4wis2bvm"/></mask></defs><path mask="url(#SVGsu0PwdKx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:filter",
	});
}

export default Component;
