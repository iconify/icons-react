import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elj6am0qw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elj6am0qw"/>`,
		"fallback": "streamline-cyber:delete-circle-1",
	});
}

export default Component;
