import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pr5n7mb5f.css';
import '../../css/b/b7xcik0eh.css';
import '../../css/w/w9bcbnpgo.css';
import '../../css/d/dyisvyq3k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNUQcGcFP"><g class="rohhhzb0l"><path class="pr5n7mb5f"/><path class="b7xcik0eh"/><rect class="w9bcbnpgo"/><path class="dyisvyq3k"/></g></mask></defs><path mask="url(#SVGNUQcGcFP)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bee",
	});
}

export default Component;
