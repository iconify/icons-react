import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btiywl9qq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="btiywl9qq"/>`,
		"fallback": "streamline-plump:block-1-solid",
	});
}

export default Component;
