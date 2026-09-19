import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-oad4bhw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-oad4bhw"/>`,
		"fallback": "codicon:bug",
	});
}

export default Component;
