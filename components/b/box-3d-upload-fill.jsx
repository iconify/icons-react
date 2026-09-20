import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6g-occ4g.css';
import '../../css/l/luiwpibjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6g-occ4g"/><path class="luiwpibjx"/>`,
		"fallback": "mage:box-3d-upload-fill",
	});
}

export default Component;
