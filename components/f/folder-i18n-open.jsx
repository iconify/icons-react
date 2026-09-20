import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_4c-ac4q.css';
import '../../css/g/gjq27j13b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_4c-ac4q"/><path class="gjq27j13b"/>`,
		"fallback": "material-icon-theme:folder-i18n-open",
	});
}

export default Component;
