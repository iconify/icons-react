import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smqjcg2tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smqjcg2tk"/>`,
		"fallback": "boxicons:alert-circle-filled",
	});
}

export default Component;
