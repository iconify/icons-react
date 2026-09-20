import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/doir15bbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="doir15bbo"/>`,
		"fallback": "reicon:folder-error",
	});
}

export default Component;
