import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrjor5bbf.css';
import '../../css/n/njn_aqw9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrjor5bbf wm-k"/><path class="njn_aqw9z wm-a"/>`,
		"fallback": "withicons-bauhaus:hexagon",
	});
}

export default Component;
