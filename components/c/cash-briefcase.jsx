import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sdfs1dbfw.css';
import '../../css/z/zujceqbxj.css';
import '../../css/d/di9ycbc0b.css';
import '../../css/q/qww2x6b-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sdfs1dbfw"/><path class="zujceqbxj"/><path class="di9ycbc0b"/><path class="qww2x6b-n"/></g>`,
		"fallback": "streamline-ultimate-color:cash-briefcase",
	});
}

export default Component;
