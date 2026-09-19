import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njcuftpsa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njcuftpsa"/>`,
		"fallback": "icomoon-free:google-drive",
	});
}

export default Component;
