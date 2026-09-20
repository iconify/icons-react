import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8tm8wbyj.css';
import '../../css/g/g88eq9dnz.css';
import '../../css/d/dchmdubmn.css';
import '../../css/z/zakpfgeng.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8tm8wbyj"/><path class="g88eq9dnz"/><path class="dchmdubmn"/><path class="zakpfgeng"/></g>`,
		"fallback": "thesvg-color:gitlab",
	});
}

export default Component;
