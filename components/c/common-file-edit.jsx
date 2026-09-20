import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7v7z11sx.css';
import '../../css/v/vljgd4n0p.css';
import '../../css/c/cxlg3vl1a.css';
import '../../css/i/ifaz70qgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g7v7z11sx"/><path class="vljgd4n0p"/><path class="cxlg3vl1a"/><path class="ifaz70qgs"/></g>`,
		"fallback": "streamline-ultimate-color:common-file-edit",
	});
}

export default Component;
