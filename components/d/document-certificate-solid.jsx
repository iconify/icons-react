import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt6nv_bqo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xt6nv_bqo"/>`,
		"fallback": "streamline-plump:document-certificate-solid",
	});
}

export default Component;
