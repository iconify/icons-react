import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llg57ea4p.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llg57ea4p"/>`,
		"fallback": "ant-design:border-bottom-outline",
	});
}

export default Component;
