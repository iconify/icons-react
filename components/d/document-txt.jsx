import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggu5fgb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ggu5fgb5t"/>`,
		"fallback": "grommet-icons:document-txt",
	});
}

export default Component;
