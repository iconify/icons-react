import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/i/iqfudrb2n.css';
import '../../css/m/mzehp1zbt.css';
import '../../css/t/tycficb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="iqfudrb2n"/><path class="mzehp1zbt"/><path class="tycficb6d"/></g>`,
		"fallback": "streamline-logos:google-maps-logo",
	});
}

export default Component;
