import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xl4404x2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xl4404x2m"/>`,
		"fallback": "reicon:folder-add",
	});
}

export default Component;
