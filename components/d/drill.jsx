import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nm5v3hbmq.css';
import '../../css/j/jdmci-vhw.css';
import '../../css/o/ozwv80bmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="nm5v3hbmq"/><path class="jdmci-vhw"/><path class="ozwv80bmy"/></g>`,
		"fallback": "withicons-bauhaus:drill",
	});
}

export default Component;
