import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xaxmjgbje.css';
import '../../css/o/ofusmvbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xaxmjgbje"/><path class="ofusmvbko"/>`,
		"fallback": "lucide-extended:file-output-filled",
	});
}

export default Component;
