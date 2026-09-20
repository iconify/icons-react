import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfea3xd4k.css';
import '../../css/j/j_uaq2b1q.css';
import '../../css/g/gzde_vbeg.css';
import '../../css/f/fri7vv0zh.css';

const viewBox = {"width":466,"height":511.98};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfea3xd4k"/><path class="j_uaq2b1q"/><path class="gzde_vbeg"/><path class="fri7vv0zh"/>`,
		"fallback": "thesvg-color:google-play",
	});
}

export default Component;
