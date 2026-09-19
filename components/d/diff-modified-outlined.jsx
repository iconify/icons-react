import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m51-nib4u.css';
import '../../css/g/gp8fatbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m51-nib4u"/><circle class="gp8fatbpd"/>`,
		"fallback": "eos-icons:diff-modified-outlined",
	});
}

export default Component;
