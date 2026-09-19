import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csw0kbbpv.css';
import '../../css/l/lt9927b3v.css';
import '../../css/w/ws63ig51q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGl4rQrcUi"><g class="csw0kbbpv"><path class="lt9927b3v"/><path class="ws63ig51q"/></g></mask></defs><path mask="url(#SVGl4rQrcUi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:concern",
	});
}

export default Component;
