import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stu8cqb7t.css';
import '../../css/c/c485hsbmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stu8cqb7t"/><path class="c485hsbmk"/>`,
		"fallback": "octicon:diff-added-24",
	});
}

export default Component;
