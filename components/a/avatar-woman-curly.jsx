import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uzhkxcc1u.css';
import '../../css/l/l8q459dno.css';
import '../../css/b/baoogbiqr.css';
import '../../css/m/me9aljyds.css';
import '../../css/f/f6q-rwbae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uzhkxcc1u"/><path class="l8q459dno"/><path class="baoogbiqr"/><path class="me9aljyds"/><path class="f6q-rwbae"/></g>`,
		"fallback": "withicons-bauhaus:avatar-woman-curly",
	});
}

export default Component;
