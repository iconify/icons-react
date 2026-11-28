import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb-udccci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb-udccci"/>`,
		"fallback": "noviair:factory-check",
	});
}

export default Component;
