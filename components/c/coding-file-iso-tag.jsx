import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sieadqeio.css';
import '../../css/q/qorwe0ghw.css';
import '../../css/w/wyomucc5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="sieadqeio"/><path class="qorwe0ghw"/><path class="wyomucc5f"/></g>`,
		"fallback": "streamline-freehand-color:coding-file-iso-tag",
	});
}

export default Component;
