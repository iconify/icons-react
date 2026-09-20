import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiyq1g7qw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fiyq1g7qw"/>`,
		"fallback": "selfhst:hashicorp-light",
	});
}

export default Component;
