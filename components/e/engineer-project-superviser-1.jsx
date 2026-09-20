import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b6uavyogq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b6uavyogq"/>`,
		"fallback": "streamline-ultimate:engineer-project-superviser-1",
	});
}

export default Component;
