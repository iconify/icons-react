import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eux2u3jdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eux2u3jdq"/>`,
		"fallback": "gg:format-text",
	});
}

export default Component;
