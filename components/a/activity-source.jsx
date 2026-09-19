import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig6wfsbtl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGLlepUcCE"><path class="ig6wfsbtl"/></mask></defs><path mask="url(#SVGLlepUcCE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:activity-source",
	});
}

export default Component;
