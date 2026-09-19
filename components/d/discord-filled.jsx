import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifq7fr6yy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifq7fr6yy"/>`,
		"fallback": "ant-design:discord-filled",
	});
}

export default Component;
