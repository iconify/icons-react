import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbhczis_n.css';
import '../../css/g/g6y54xlpm.css';
import '../../css/u/up9gopgdj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbhczis_n"/><path class="g6y54xlpm"/><path class="up9gopgdj"/>`,
		"fallback": "selfhst:capacitor-runtime-dark",
	});
}

export default Component;
