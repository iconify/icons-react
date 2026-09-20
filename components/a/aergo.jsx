import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi609bcuk.css';
import '../../css/s/s-xq_4b7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi609bcuk"/><path class="s-xq_4b7p"/>`,
		"fallback": "token:aergo",
	});
}

export default Component;
