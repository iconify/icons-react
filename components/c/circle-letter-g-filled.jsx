import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjo0s3sqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mjo0s3sqq"/>`,
		"fallback": "lucide-extended:circle-letter-g-filled",
	});
}

export default Component;
