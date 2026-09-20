import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sujk3jbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sujk3jbam"/>`,
		"fallback": "uis:anchor",
	});
}

export default Component;
