import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcd97drra.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcd97drra"/>`,
		"fallback": "ant-design:google-circle-filled",
	});
}

export default Component;
