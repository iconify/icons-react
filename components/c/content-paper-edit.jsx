import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cretmw0yu.css';
import '../../css/l/l7mp3jb5j.css';
import '../../css/t/tr5khpbzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cretmw0yu"/><path class="l7mp3jb5j"/><path class="tr5khpbzi"/></g>`,
		"fallback": "streamline-freehand-color:content-paper-edit",
	});
}

export default Component;
