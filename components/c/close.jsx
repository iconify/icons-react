import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/matrm2b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="matrm2b0a"/>`,
		"fallback": "grommet-icons:close",
	});
}

export default Component;
