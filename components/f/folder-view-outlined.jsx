import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m48pxccbl.css';
import '../../css/f/fuwxw7uog.css';
import '../../css/e/ejl28tb4a.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m48pxccbl"/><path class="fuwxw7uog"/><path class="ejl28tb4a"/>`,
		"fallback": "ant-design:folder-view-outlined",
	});
}

export default Component;
