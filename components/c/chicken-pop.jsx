import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2qvxrb5j.css';
import '../../css/x/xnyexgb8v.css';
import '../../css/m/mzlcjnc6e.css';
import '../../css/r/r7reecb3y.css';
import '../../css/z/zea1-7nrj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g2qvxrb5j"/><path class="xnyexgb8v"/><path class="mzlcjnc6e"/><path class="r7reecb3y"/><path clip-rule="evenodd" class="zea1-7nrj"/></g>`,
		"fallback": "streamline-kameleon-color:chicken-pop",
	});
}

export default Component;
