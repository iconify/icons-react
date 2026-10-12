import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnwq9rb9e.css';
import '../../css/a/ab-wz6bnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnwq9rb9e"/><path class="ab-wz6bnp"/>`,
		"fallback": "lucide-extended:database-arrow-up-filled",
	});
}

export default Component;
