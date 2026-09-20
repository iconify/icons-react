import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a615a3b_f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a615a3b_f"/>`,
		"fallback": "ix:backup-filled",
	});
}

export default Component;
