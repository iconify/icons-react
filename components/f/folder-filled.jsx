import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwoeg07yr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwoeg07yr"/>`,
		"fallback": "lucide-extended:folder-filled",
	});
}

export default Component;
