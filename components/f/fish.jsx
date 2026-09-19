import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik6frwa0u.css';
import '../../css/i/idgsmsbrw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik6frwa0u"/><path class="idgsmsbrw"/>`,
		"fallback": "famicons:fish",
	});
}

export default Component;
