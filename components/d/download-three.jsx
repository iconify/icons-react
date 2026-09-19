import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/u/ua-z8vb0h.css';
import '../../css/f/f44r9acav.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGUfApceoH"><g class="v3_i3wktz"><path class="ua-z8vb0h"/><path class="f44r9acav"/></g></mask></defs><path mask="url(#SVGUfApceoH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:download-three",
	});
}

export default Component;
