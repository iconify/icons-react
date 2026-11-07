import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apdbvacmy.css';
import '../../css/f/fwigkjz1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="apdbvacmy"/><path class="fwigkjz1e"/>`,
		"fallback": "solar:book-bold",
	});
}

export default Component;
