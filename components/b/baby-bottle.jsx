import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6g4cmbih.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6g4cmbih"/>`,
		"fallback": "icon-park-outline:baby-bottle",
	});
}

export default Component;
