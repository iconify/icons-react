import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv7bhzbwf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fv7bhzbwf"/>`,
		"fallback": "ix:data-type-enum",
	});
}

export default Component;
