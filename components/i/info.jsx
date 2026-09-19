import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk_fp9bqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jk_fp9bqw"/>`,
		"fallback": "healthicons:info",
	});
}

export default Component;
