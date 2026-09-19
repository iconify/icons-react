import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssm6_4kzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssm6_4kzg"/>`,
		"fallback": "gg:chevron-left",
	});
}

export default Component;
