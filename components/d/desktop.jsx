import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eopuldb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eopuldb2y"/>`,
		"fallback": "grommet-icons:desktop",
	});
}

export default Component;
