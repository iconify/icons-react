import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfs3-mmpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfs3-mmpq"/>`,
		"fallback": "vadivam:chevrons-up-down",
	});
}

export default Component;
