import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zd_jq-bdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zd_jq-bdm"/>`,
		"fallback": "streamline-plump:block-1",
	});
}

export default Component;
