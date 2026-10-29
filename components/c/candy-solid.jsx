import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fphb3weuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fphb3weuh"/>`,
		"fallback": "withicons:candy-solid",
	});
}

export default Component;
