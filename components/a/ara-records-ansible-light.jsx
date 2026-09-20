import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j84coq6et.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j84coq6et"/>`,
		"fallback": "selfhst:ara-records-ansible-light",
	});
}

export default Component;
