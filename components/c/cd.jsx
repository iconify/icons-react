import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/tqw8k0f0r.css';
import '../../css/i/ir6hycbbm.css';
import '../../css/d/dknf_wbxh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHGE1fbFZ"><g class="rohhhzb0l"><circle class="tqw8k0f0r"/><path class="ir6hycbbm"/><circle class="dknf_wbxh"/></g></mask></defs><path mask="url(#SVGHGE1fbFZ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:cd",
	});
}

export default Component;
