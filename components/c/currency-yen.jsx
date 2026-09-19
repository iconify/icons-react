import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcapv9ssm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcapv9ssm"/>`,
		"fallback": "heroicons-outline:currency-yen",
	});
}

export default Component;
