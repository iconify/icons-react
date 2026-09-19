import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lde9uw_os.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lde9uw_os"/>`,
		"fallback": "ant-design:file-image-filled",
	});
}

export default Component;
