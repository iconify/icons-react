import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dknh6ga3x.css';
import '../../css/x/xnighxjdo.css';
import '../../css/d/dhfc635_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dknh6ga3x"/><path class="xnighxjdo"/><path class="dhfc635_t"/>`,
		"fallback": "uim:google-drive",
	});
}

export default Component;
