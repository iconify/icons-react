import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sge51zbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sge51zbet"/>`,
		"fallback": "griddy-icons:globe-alt-02-filled",
	});
}

export default Component;
