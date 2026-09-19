import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rydklwuel.css';
import '../../css/z/zn61f8zew.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 rydklwuel"/><path class="clr-i-outline clr-i-outline-path-2 zn61f8zew"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:color-picker-line",
	});
}

export default Component;
