import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1crshb5u.css';
import '../../css/j/jfyd0-b7p.css';
import '../../css/j/j-h21xgaa.css';
import '../../css/o/osrapabyl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1crshb5u"/><g class="jfyd0-b7p"><path transform="matrix(.53379 0 0 .54472 7.231 7.141)" class="j-h21xgaa"/><path transform="matrix(.53379 0 0 .54472 7.231 7.141)" class="osrapabyl"/></g>`,
		"fallback": "catppuccin:folder-gradle-open",
	});
}

export default Component;
