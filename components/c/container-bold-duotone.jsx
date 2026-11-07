import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni1kys5ku.css';
import '../../css/n/n-diywgxs.css';
import '../../css/d/dxbekopeu.css';
import '../../css/t/tslk0db_u.css';
import '../../css/m/mg04wxhnt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni1kys5ku"/><path class="n-diywgxs"/><path class="dxbekopeu"/><path class="tslk0db_u"/><path class="mg04wxhnt"/>`,
		"fallback": "solar:container-bold-duotone",
	});
}

export default Component;
