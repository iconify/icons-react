import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz1otrbai.css';
import '../../css/e/eka_oeb-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz1otrbai"/><path class="eka_oeb-d"/>`,
		"fallback": "selfhst:calagopus",
	});
}

export default Component;
