import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcfh--ixw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcfh--ixw"/>`,
		"fallback": "f7:doc-on-clipboard-fill",
	});
}

export default Component;
