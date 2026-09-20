import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf6trlnmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf6trlnmu"/>`,
		"fallback": "ri:folder-upload-line",
	});
}

export default Component;
