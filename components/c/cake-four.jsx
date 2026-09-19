import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wqc8scbug.css';
import '../../css/s/sy2au8wtm.css';
import '../../css/q/qowkpdb6h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmU1dhVZp"><g class="rohhhzb0l"><path class="wqc8scbug"/><path class="sy2au8wtm"/><path class="qowkpdb6h"/></g></mask></defs><path mask="url(#SVGmU1dhVZp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cake-four",
	});
}

export default Component;
