import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr197o85d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr197o85d"/>`,
		"fallback": "grommet-icons:bug",
	});
}

export default Component;
