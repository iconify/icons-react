import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmqyrob4j.css';
import '../../css/o/o99en_44g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qmqyrob4j"/><path class="o99en_44g"/>`,
		"fallback": "token:dvpn",
	});
}

export default Component;
