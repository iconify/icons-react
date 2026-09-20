import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os1my55bi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="os1my55bi"/>`,
		"fallback": "streamline-plump:file-report-solid",
	});
}

export default Component;
