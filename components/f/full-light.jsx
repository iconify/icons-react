import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpk_m-oiv.css';
import '../../css/q/qhbzephbs.css';
import '../../css/y/ydp0b-b3w.css';
import '../../css/c/cu0gh7bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpk_m-oiv"/><path class="qhbzephbs"/><path class="ydp0b-b3w"/><path class="cu0gh7bha"/>`,
		"fallback": "lets-icons:full-light",
	});
}

export default Component;
