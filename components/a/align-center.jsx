import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh4rqfpek.css';
import '../../css/l/luoocdwcm.css';
import '../../css/m/mrtpigbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh4rqfpek"/><path class="luoocdwcm"/><path class="mrtpigbey"/>`,
		"fallback": "withicons-bauhaus:align-center",
	});
}

export default Component;
