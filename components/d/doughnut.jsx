import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/m/muvtlrodu.css';
import '../../css/s/se2_uxbgg.css';
import '../../css/t/tecn4bbqc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGFCr4OcVe"><g class="rohhhzb0l"><circle class="muvtlrodu"/><circle class="se2_uxbgg"/><path class="tecn4bbqc"/></g></mask></defs><path mask="url(#SVGFCr4OcVe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:doughnut",
	});
}

export default Component;
