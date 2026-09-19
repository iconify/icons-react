import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncyj44b5x.css';
import '../../css/f/ff2fwvbbo.css';
import '../../css/w/wkw5ubzax.css';
import '../../css/a/a1gq_7yoi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnZ9PAwFo"><g class="ft5dv1b6b"><path class="ncyj44b5x"/><path class="ff2fwvbbo"/><path class="wkw5ubzax"/><path clip-rule="evenodd" class="a1gq_7yoi"/></g></mask></defs><path mask="url(#SVGnZ9PAwFo)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:file-tips",
	});
}

export default Component;
