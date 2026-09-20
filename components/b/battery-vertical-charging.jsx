import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jmc-e4w0p.css';
import '../../css/m/m_wvr_kvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jmc-e4w0p"/><path class="m_wvr_kvl"/></g>`,
		"fallback": "tabler:battery-vertical-charging",
	});
}

export default Component;
