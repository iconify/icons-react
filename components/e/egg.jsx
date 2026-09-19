import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/w19zccbwk.css';
import '../../css/w/w0ggckbeu.css';
import '../../css/p/p7b_6qbai.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7r2njetO"><g class="rohhhzb0l"><circle class="w19zccbwk"/><path class="w0ggckbeu"/><path class="p7b_6qbai"/></g></mask></defs><path mask="url(#SVG7r2njetO)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:egg",
	});
}

export default Component;
