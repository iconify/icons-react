import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7kg3hbvs.css';
import '../../css/i/irdc55aqf.css';
import '../../css/d/di4jzbbfu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7kg3hbvs"/><path class="irdc55aqf"/><path class="di4jzbbfu"/>`,
		"fallback": "famicons:construct-outline",
	});
}

export default Component;
