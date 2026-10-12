import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3kg0ka3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3kg0ka3o"/>`,
		"fallback": "lucide-extended:gavel-filled",
	});
}

export default Component;
