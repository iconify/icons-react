import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld7du4pgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld7du4pgs"/>`,
		"fallback": "grommet-icons:document-rtf",
	});
}

export default Component;
