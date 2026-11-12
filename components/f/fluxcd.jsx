import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hizqcsbyt.css';
import '../../css/x/xsfw_6dos.css';
import '../../css/y/yvtc_v5-m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hizqcsbyt"/><path class="xsfw_6dos"/><path class="yvtc_v5-m"/>`,
		"fallback": "devicon:fluxcd",
	});
}

export default Component;
