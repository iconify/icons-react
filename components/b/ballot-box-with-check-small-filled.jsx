import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw4exoqzs.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw4exoqzs"/>`,
		"fallback": "dinkie-icons:ballot-box-with-check-small-filled",
	});
}

export default Component;
