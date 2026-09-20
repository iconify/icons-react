import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a272yoahj.css';
import '../../css/x/x51ruxbqo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a272yoahj"/><path clip-rule="evenodd" class="x51ruxbqo"/>`,
		"fallback": "token:four",
	});
}

export default Component;
