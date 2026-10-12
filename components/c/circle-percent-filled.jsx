import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq9yxutpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fq9yxutpl"/>`,
		"fallback": "lucide-extended:circle-percent-filled",
	});
}

export default Component;
