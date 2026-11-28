import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqzrm9bdh.css';
import '../../css/u/ur_vkvbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqzrm9bdh secondary"/><path class="primary ur_vkvbng"/>`,
		"fallback": "iconaut:flow-stored-data-duo",
	});
}

export default Component;
