import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnx5z5buf.css';
import '../../css/q/qhqeaxbqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnx5z5buf"/><path class="qhqeaxbqt"/>`,
		"fallback": "mage:box-3d-plus-fill",
	});
}

export default Component;
