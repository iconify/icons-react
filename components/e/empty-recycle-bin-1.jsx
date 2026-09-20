import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vwbxesc0s.css';
import '../../css/a/arerwqhwf.css';
import '../../css/c/c992g34tk.css';
import '../../css/b/beq7crb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vwbxesc0s"/><path class="arerwqhwf"/><path class="c992g34tk"/><path class="beq7crb5p"/></g>`,
		"fallback": "streamline-sharp-color:empty-recycle-bin-1",
	});
}

export default Component;
