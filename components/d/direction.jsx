import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fbxmsfbue.css';
import '../../css/w/w17uzvbov.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFpN5cc0d"><g class="ft5dv1b6b"><rect class="fbxmsfbue"/><path class="w17uzvbov"/></g></mask></defs><path mask="url(#SVGFpN5cc0d)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:direction",
	});
}

export default Component;
