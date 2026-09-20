import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn-2fcubd.css';
import '../../css/c/cia5ouwnr.css';
import '../../css/v/vu75sh_8v.css';
import '../../css/a/a5ynwdbbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn-2fcubd"/><path class="cia5ouwnr"/><path class="vu75sh_8v"/><path class="a5ynwdbbs"/>`,
		"fallback": "selfhst:ente-auth-light",
	});
}

export default Component;
