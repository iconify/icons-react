import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcemhlb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcemhlb5a"/>`,
		"fallback": "ix:aas-project-tcx",
	});
}

export default Component;
