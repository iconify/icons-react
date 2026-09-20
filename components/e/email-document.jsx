import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dje-5vern.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dje-5vern"/>`,
		"fallback": "ix:email-document",
	});
}

export default Component;
