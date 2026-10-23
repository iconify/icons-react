import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe_tb04fk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe_tb04fk"/>`,
		"fallback": "vadivam:battery-warning",
	});
}

export default Component;
