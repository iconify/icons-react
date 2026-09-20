import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dur0b2p3t.css';
import '../../css/h/h8ttso15c.css';
import '../../css/r/rmslx6b5x.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dur0b2p3t"/><path class="h8ttso15c"/><path class="rmslx6b5x"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-benin",
	});
}

export default Component;
