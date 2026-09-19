import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4tgbvbns.css';
import '../../css/o/o7g2p2-br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4tgbvbns"/><path class="o7g2p2-br"/>`,
		"fallback": "eos-icons:configuration-file-outlined",
	});
}

export default Component;
