import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npgdh3aap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npgdh3aap"/>`,
		"fallback": "ri:arrow-down-box-line",
	});
}

export default Component;
