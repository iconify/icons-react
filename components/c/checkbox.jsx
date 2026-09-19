import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1_swcb_o.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/q/qwhezwbdq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGU9WF5dmC"><g class="v1_swcb_o"><path class="p-3d8dotc"/><path class="qwhezwbdq"/></g></mask></defs><path mask="url(#SVGU9WF5dmC)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:checkbox",
	});
}

export default Component;
