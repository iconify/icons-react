import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovb3_79qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovb3_79qw"/>`,
		"fallback": "uit:behance-alt",
	});
}

export default Component;
