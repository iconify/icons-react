import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/parj51b-v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9H2JBOPY"><path class="parj51b-v"/></mask></defs><path mask="url(#SVG9H2JBOPY)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:fire",
	});
}

export default Component;
