import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rgna-dbok.css';
import '../../css/w/w-46dcbay.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGSgjLNcpB"><g class="v3_i3wktz"><path class="rgna-dbok"/><path class="w-46dcbay"/></g></mask></defs><path mask="url(#SVGSgjLNcpB)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:enter-the-keyboard",
	});
}

export default Component;
