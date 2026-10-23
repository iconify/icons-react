import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sois_5fph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sois_5fph"/>`,
		"fallback": "vadivam:database-backup",
	});
}

export default Component;
