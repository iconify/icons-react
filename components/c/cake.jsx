import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_1i2wbog.css';
import '../../css/e/ebk-i5bgy.css';
import '../../css/x/xrrh6ldfr.css';
import '../../css/a/aua1mubtl.css';
import '../../css/x/xf1xh1bme.css';
import '../../css/e/ekfy4t2yo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_1i2wbog"/><path class="ebk-i5bgy"/><path class="xrrh6ldfr"/><path class="aua1mubtl"/><path class="xf1xh1bme"/><path class="ekfy4t2yo"/>`,
		"fallback": "devicon:cake",
	});
}

export default Component;
