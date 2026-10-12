import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y53soubyt.css';
import '../../css/o/o604fd26w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y53soubyt"/><path class="o604fd26w"/>`,
		"fallback": "lucide-extended:house-plus-filled",
	});
}

export default Component;
