import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gaeaejbpf.css';
import '../../css/h/hpos-4btv.css';
import '../../css/o/ou9b6zecu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="gaeaejbpf"/><path class="hpos-4btv"/><path class="ou9b6zecu"/></g>`,
		"fallback": "matita:image",
	});
}

export default Component;
