import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/j/jjfd7rbye.css';
import '../../css/f/f1r26vbpu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFEM1KGbI"><g class="v3_i3wktz"><path class="jjfd7rbye"/><path class="f1r26vbpu"/></g></mask></defs><path mask="url(#SVGFEM1KGbI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:audit",
	});
}

export default Component;
