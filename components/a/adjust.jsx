import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpp8mr3id.css';

const viewBox = {"width":717,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpp8mr3id"/>`,
		"fallback": "ls:adjust",
	});
}

export default Component;
