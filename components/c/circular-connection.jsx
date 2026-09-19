import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/evcx3abrv.css';
import '../../css/e/e53olifge.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWl3NShse"><g class="rohhhzb0l"><path class="evcx3abrv"/><path class="e53olifge"/></g></mask></defs><path mask="url(#SVGWl3NShse)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:circular-connection",
	});
}

export default Component;
