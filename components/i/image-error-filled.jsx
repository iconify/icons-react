import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x78rb0q8y.css';
import '../../css/n/n8fw_acsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x78rb0q8y"/><path class="n8fw_acsa"/>`,
		"fallback": "tdesign:image-error-filled",
	});
}

export default Component;
