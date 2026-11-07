import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgissgbda.css';
import '../../css/t/t3fbyzb7o.css';
import '../../css/o/ont9fsbmp.css';
import '../../css/h/hvizvfbcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgissgbda"/><path class="t3fbyzb7o"/><path class="ont9fsbmp"/><path class="hvizvfbcp"/>`,
		"fallback": "solar:file-pen-bold-duotone",
	});
}

export default Component;
