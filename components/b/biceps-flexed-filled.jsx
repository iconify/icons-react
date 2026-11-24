import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsyt8ubya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsyt8ubya"/>`,
		"fallback": "lucide-extended:biceps-flexed-filled",
	});
}

export default Component;
