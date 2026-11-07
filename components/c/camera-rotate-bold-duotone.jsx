import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvnq9o5sc.css';
import '../../css/t/tfuw8dqxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvnq9o5sc"/><path class="tfuw8dqxk"/>`,
		"fallback": "solar:camera-rotate-bold-duotone",
	});
}

export default Component;
