import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uas_n9iqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uas_n9iqv"/>`,
		"fallback": "token:crwny",
	});
}

export default Component;
