import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/g/gtrrgfidl.css';
import '../../css/h/h1cz9gxaz.css';
import '../../css/f/fajfv3krn.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="gtrrgfidl"/><path class="h1cz9gxaz"/><circle class="fajfv3krn"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-samoa",
	});
}

export default Component;
