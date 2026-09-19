import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-dd0bcpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-dd0bcpb"/>`,
		"fallback": "grommet-icons:document-excel",
	});
}

export default Component;
