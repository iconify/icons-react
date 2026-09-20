import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssc1-xone.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssc1-xone"/>`,
		"fallback": "tabler:id-filled",
	});
}

export default Component;
