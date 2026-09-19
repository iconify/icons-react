import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqx9rpnoy.css';
import '../../css/d/dvqj1jbdf.css';
import '../../css/g/g8s4idbev.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGkYaseeMx"><g class="ft5dv1b6b"><path class="mqx9rpnoy"/><path clip-rule="evenodd" class="dvqj1jbdf"/><path class="g8s4idbev"/></g></mask></defs><path mask="url(#SVGkYaseeMx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:attention",
	});
}

export default Component;
