import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv3m_437d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv3m_437d"/>`,
		"fallback": "ant-design:audio-outline",
	});
}

export default Component;
