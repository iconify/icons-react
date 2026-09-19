import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwm6jac9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwm6jac9w"/>`,
		"fallback": "ci:heading-h2",
	});
}

export default Component;
