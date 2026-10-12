import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gml9_ib2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gml9_ib2b"/>`,
		"fallback": "lucide-extended:git-pull-request-create-filled",
	});
}

export default Component;
