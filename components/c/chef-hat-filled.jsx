import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdj2bxbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdj2bxbzd"/>`,
		"fallback": "lucide-extended:chef-hat-filled",
	});
}

export default Component;
