import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp49s3s_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp49s3s_z"/>`,
		"fallback": "grommet-icons:folder",
	});
}

export default Component;
