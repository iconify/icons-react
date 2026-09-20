import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9qc58bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9qc58bsw"/>`,
		"fallback": "uit:document-layout-left",
	});
}

export default Component;
