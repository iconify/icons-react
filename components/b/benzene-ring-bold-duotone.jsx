import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyh2oqlzb.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/f5f0jwb-w.css';
import '../../css/g/gqdhlkbho.css';
import '../../css/d/d8_onbakg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pyh2oqlzb"/><g class="xtpeb-edw"><path class="f5f0jwb-w"/><path class="gqdhlkbho"/><path class="d8_onbakg"/></g>`,
		"fallback": "solar:benzene-ring-bold-duotone",
	});
}

export default Component;
