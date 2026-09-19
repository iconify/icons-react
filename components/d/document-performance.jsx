import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zri2zabea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zri2zabea"/>`,
		"fallback": "grommet-icons:document-performance",
	});
}

export default Component;
