import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jh948nbrj.css';
import '../../css/f/fqimk247c.css';
import '../../css/x/xqvxr7yns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jh948nbrj"/><path class="fqimk247c"/><path class="xqvxr7yns"/></g>`,
		"fallback": "healthicons:confused-outline",
	});
}

export default Component;
