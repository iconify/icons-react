import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehjrp2gbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ehjrp2gbd"/>`,
		"fallback": "ix:battery-empty-question",
	});
}

export default Component;
