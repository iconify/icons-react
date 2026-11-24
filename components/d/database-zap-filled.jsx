import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz7xlfb-v.css';
import '../../css/b/bbq8uabvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz7xlfb-v"/><path class="bbq8uabvg"/>`,
		"fallback": "lucide-extended:database-zap-filled",
	});
}

export default Component;
