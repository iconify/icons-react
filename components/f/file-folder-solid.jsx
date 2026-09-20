import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmn7a4bpl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rmn7a4bpl"/>`,
		"fallback": "streamline-plump:file-folder-solid",
	});
}

export default Component;
