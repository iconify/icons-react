import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yqard8b1c.css';
import '../../css/e/edz9x2t2i.css';
import '../../css/x/xnj0lr11i.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4MNkIdef"><g class="ft5dv1b6b"><path clip-rule="evenodd" class="yqard8b1c"/><path class="edz9x2t2i"/><path class="xnj0lr11i"/></g></mask></defs><path mask="url(#SVG4MNkIdef)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:injection",
	});
}

export default Component;
