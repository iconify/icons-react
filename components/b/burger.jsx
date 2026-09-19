import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocu754bvl.css';
import '../../css/u/unqc_fbjm.css';
import '../../css/x/x14bsnkwi.css';
import '../../css/m/m4xzt-y8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocu754bvl"/><circle class="unqc_fbjm"/><circle class="x14bsnkwi"/><circle class="m4xzt-y8u"/>`,
		"fallback": "circum:burger",
	});
}

export default Component;
