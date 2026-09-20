import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qad7z8bum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qad7z8bum"/>`,
		"fallback": "lucide-lab:gearbox",
	});
}

export default Component;
