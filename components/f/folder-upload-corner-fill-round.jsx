import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thsueubkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thsueubkv"/>`,
		"fallback": "coolicons:folder-upload-corner-fill-round",
	});
}

export default Component;
