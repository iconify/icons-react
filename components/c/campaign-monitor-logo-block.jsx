import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol6h9rdbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ol6h9rdbp"/>`,
		"fallback": "streamline-logos:campaign-monitor-logo-block",
	});
}

export default Component;
