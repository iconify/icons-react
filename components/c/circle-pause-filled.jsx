import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no2d46b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="no2d46b3x"/>`,
		"fallback": "lucide-extended:circle-pause-filled",
	});
}

export default Component;
