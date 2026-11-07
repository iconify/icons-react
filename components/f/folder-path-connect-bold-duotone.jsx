import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpblz967y.css';
import '../../css/a/a8nv6abtp.css';
import '../../css/o/otdnmtknq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpblz967y"/><path class="a8nv6abtp"/><path clip-rule="evenodd" class="otdnmtknq"/>`,
		"fallback": "solar:folder-path-connect-bold-duotone",
	});
}

export default Component;
