import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcbi2lbyp.css';
import '../../css/p/pckj90bca.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcbi2lbyp"/><path class="pckj90bca"/>`,
		"fallback": "selfhst:flatnotes",
	});
}

export default Component;
