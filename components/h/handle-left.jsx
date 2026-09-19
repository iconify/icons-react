import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylrso7y3c.css';
import '../../css/e/etzb_tbee.css';
import '../../css/y/y6ceh3urm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTa2KLeHE"><g class="ylrso7y3c"><rect class="etzb_tbee"/><path class="y6ceh3urm"/></g></mask></defs><path mask="url(#SVGTa2KLeHE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:handle-left",
	});
}

export default Component;
