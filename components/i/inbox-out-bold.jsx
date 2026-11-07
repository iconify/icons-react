import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmw0msqap.css';
import '../../css/j/jbgenzzof.css';
import '../../css/p/p09aqjb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bmw0msqap"/><path class="jbgenzzof"/><path class="p09aqjb1i"/>`,
		"fallback": "solar:inbox-out-bold",
	});
}

export default Component;
