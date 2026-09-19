import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eizigmdoq.css';
import '../../css/c/czpw7jf4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="eizigmdoq"/><path class="czpw7jf4c"/>`,
		"fallback": "bitcoin-icons:copy-filled",
	});
}

export default Component;
