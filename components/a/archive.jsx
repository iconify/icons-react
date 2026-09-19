import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au98x5bva.css';
import '../../css/t/toacpk17o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au98x5bva"/><path class="toacpk17o"/>`,
		"fallback": "bx:archive",
	});
}

export default Component;
