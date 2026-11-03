import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/ql9m-zbdi.css';
import '../../css/c/cpdlicbfk.css';

const viewBox = {"width":1396.28,"height":387.95,"left":272.15,"top":648.13};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ql9m-zbdi"/><path class="cpdlicbfk"/>`,
		"fallback": "thesvg-color:backrest-dark",
	});
}

export default Component;
