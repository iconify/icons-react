import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgjuh8b2j.css';
import '../../css/z/zqpq1rb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sgjuh8b2j"/><path class="zqpq1rb6d"/>`,
		"fallback": "lucide-extended:feather-filled",
	});
}

export default Component;
