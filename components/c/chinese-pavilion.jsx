import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/x/xg8pt7htm.css';
import '../../css/x/x8ll_eb0k.css';
import '../../css/f/fag8nwoln.css';
import '../../css/u/uov2v7y7s.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG12PneXIR"><g class="rohhhzb0l"><path class="xg8pt7htm"/><path class="x8ll_eb0k"/><path class="fag8nwoln"/><path class="uov2v7y7s"/></g></mask></defs><path mask="url(#SVG12PneXIR)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:chinese-pavilion",
	});
}

export default Component;
