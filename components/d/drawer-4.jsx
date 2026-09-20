import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dardc0b9t.css';
import '../../css/p/p12fkv6om.css';
import '../../css/j/jy7zlrluk.css';
import '../../css/f/fri9eob9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dardc0b9t"/><path class="p12fkv6om"/><path class="jy7zlrluk"/><path class="fri9eob9x"/></g>`,
		"fallback": "streamline-cyber-color:drawer-4",
	});
}

export default Component;
