import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uri5h4b8u.css';
import '../../css/c/ct5b1-o3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uri5h4b8u"/><path class="ct5b1-o3f"/>`,
		"fallback": "eos-icons:action-chains",
	});
}

export default Component;
