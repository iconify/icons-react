import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owpurc0sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="owpurc0sw"/>`,
		"fallback": "streamline-logos:adobe-cloud-logo-solid",
	});
}

export default Component;
