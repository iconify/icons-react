import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgf_iypbv.css';
import '../../css/n/n662dbbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgf_iypbv"/><path class="n662dbbwj"/>`,
		"fallback": "tdesign:file-unlocked-filled",
	});
}

export default Component;
