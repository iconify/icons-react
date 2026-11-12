import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihh0_dbwv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihh0_dbwv"/>`,
		"fallback": "selfhst:ejabberd-dark",
	});
}

export default Component;
