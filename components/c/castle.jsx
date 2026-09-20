import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llez85_pb.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llez85_pb"/>`,
		"fallback": "pinhead:castle",
	});
}

export default Component;
