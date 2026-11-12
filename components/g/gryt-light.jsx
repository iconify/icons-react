import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubs1v_4lx.css';
import '../../css/d/dxhdilb2v.css';
import '../../css/g/g4y8tubxn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubs1v_4lx"/><path class="dxhdilb2v"/><path class="g4y8tubxn"/>`,
		"fallback": "selfhst:gryt-light",
	});
}

export default Component;
