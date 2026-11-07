import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuhjhbb0m.css';
import '../../css/z/z_zrozxsx.css';
import '../../css/u/uar6m87sg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uuhjhbb0m"/><path class="z_zrozxsx"/><path clip-rule="evenodd" class="uar6m87sg"/>`,
		"fallback": "solar:card-send-bold",
	});
}

export default Component;
