import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhenp10ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhenp10ka"/>`,
		"fallback": "vadivam:circle-letter-x",
	});
}

export default Component;
