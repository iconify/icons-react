import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqpkmbbws.css';
import '../../css/m/m_5z3sbiy.css';
import '../../css/g/g8175488f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqpkmbbws"/><path class="m_5z3sbiy"/><path class="g8175488f"/>`,
		"fallback": "teenyicons:apple-solid",
	});
}

export default Component;
