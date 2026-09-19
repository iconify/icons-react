import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dky0zvbmd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dky0zvbmd"/>`,
		"fallback": "ant-design:box-plot-filled",
	});
}

export default Component;
