import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbjfk5bks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbjfk5bks"/>`,
		"fallback": "mingcute:cloud-backup-fill",
	});
}

export default Component;
