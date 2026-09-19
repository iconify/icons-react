import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iajz1li8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iajz1li8w"/>`,
		"fallback": "heroicons-outline:document-search",
	});
}

export default Component;
