import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5hklmbye.css';
import '../../css/d/d-1rjbc-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5hklmbye"/><path class="d-1rjbc-a"/>`,
		"fallback": "lucide-extended:folders-filled",
	});
}

export default Component;
