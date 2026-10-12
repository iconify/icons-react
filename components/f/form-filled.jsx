import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sypqwq-0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sypqwq-0k"/>`,
		"fallback": "lucide-extended:form-filled",
	});
}

export default Component;
