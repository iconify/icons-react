import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csipc5o7z.css';
import '../../css/e/e-qbihbju.css';
import '../../css/h/hay2cvbsk.css';
import '../../css/y/yc_zi4ocl.css';
import '../../css/g/ght9w3bdh.css';
import '../../css/s/slp43sb8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csipc5o7z"/><path class="e-qbihbju"/><path class="hay2cvbsk"/><path class="yc_zi4ocl"/><path class="ght9w3bdh"/><path class="slp43sb8j"/>`,
		"fallback": "selfhst:folding-home-light",
	});
}

export default Component;
