import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isyu6z9ux.css';
import '../../css/z/zl5x12lyi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isyu6z9ux"/><path class="zl5x12lyi"/>`,
		"fallback": "selfhst:dynamodb-dashboard-light",
	});
}

export default Component;
