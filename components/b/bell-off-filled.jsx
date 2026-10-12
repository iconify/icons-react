import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tykflebtg.css';
import '../../css/c/cfkeagz0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tykflebtg"/><path class="cfkeagz0f"/>`,
		"fallback": "lucide-extended:bell-off-filled",
	});
}

export default Component;
