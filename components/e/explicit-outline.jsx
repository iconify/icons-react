import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bak9k5bed.css';
import '../../css/t/titlh42pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bak9k5bed"/><path clip-rule="evenodd" class="titlh42pv"/>`,
		"fallback": "solar:explicit-outline",
	});
}

export default Component;
