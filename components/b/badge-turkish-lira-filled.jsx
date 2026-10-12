import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdekmlb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sdekmlb7b"/>`,
		"fallback": "lucide-extended:badge-turkish-lira-filled",
	});
}

export default Component;
