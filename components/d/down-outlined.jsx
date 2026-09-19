import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu9hdccdy.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu9hdccdy"/>`,
		"fallback": "ant-design:down-outlined",
	});
}

export default Component;
