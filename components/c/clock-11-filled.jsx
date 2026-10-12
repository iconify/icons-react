import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gii8jmkiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gii8jmkiw"/>`,
		"fallback": "lucide-extended:clock-11-filled",
	});
}

export default Component;
