import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4xxgybar.css';
import '../../css/h/hujkt7abw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4xxgybar"/><path class="hujkt7abw"/>`,
		"fallback": "lucide-extended:cloud-upload-filled",
	});
}

export default Component;
