import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izjg96b3x.css';
import '../../css/v/vvtazx08m.css';
import '../../css/d/dx5io4b5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izjg96b3x"/><path class="vvtazx08m"/><path class="dx5io4b5f"/>`,
		"fallback": "withicons-bauhaus:arrow-left-right",
	});
}

export default Component;
