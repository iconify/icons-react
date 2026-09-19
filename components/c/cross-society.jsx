import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8qun1bmd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGPM99xcmU"><path class="y8qun1bmd"/></mask></defs><path mask="url(#SVGPM99xcmU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cross-society",
	});
}

export default Component;
