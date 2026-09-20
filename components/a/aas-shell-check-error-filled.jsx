import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elsewtq9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elsewtq9w"/>`,
		"fallback": "ix:aas-shell-check-error-filled",
	});
}

export default Component;
