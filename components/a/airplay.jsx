import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3squ__1t.css';
import '../../css/h/h8f75q1qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-primary-layer w3squ__1t"/><path class="duoicon-secondary-layer h8f75q1qw"/>`,
		"fallback": "duo-icons:airplay",
	});
}

export default Component;
