import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vezhpobfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vezhpobfn"/>`,
		"fallback": "thesvg:fortran",
	});
}

export default Component;
