import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eff8rj4kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eff8rj4kv"/>`,
		"fallback": "vadivam:bug",
	});
}

export default Component;
