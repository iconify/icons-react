import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqr5l8bbj.css';
import '../../css/g/gp7kg8iqy.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqr5l8bbj"/><path class="gp7kg8iqy"/>`,
		"fallback": "tabler-flags:diver-down",
	});
}

export default Component;
