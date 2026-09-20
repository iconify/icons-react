import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tr97dznbu.css';
import '../../css/w/wgr3atlzf.css';
import '../../css/h/hye_smbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tr97dznbu"/><path class="wgr3atlzf"/><path class="hye_smbec"/></g>`,
		"fallback": "streamline-freehand-color:edit-pen-write-paper",
	});
}

export default Component;
