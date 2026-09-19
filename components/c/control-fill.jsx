import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd014-png.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd014-png"/>`,
		"fallback": "ant-design:control-fill",
	});
}

export default Component;
