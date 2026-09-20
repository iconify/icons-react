import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/acgq-tb5a.css';
import '../../css/d/dhe4mdq8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="acgq-tb5a"/><path class="dhe4mdq8r"/></g>`,
		"fallback": "streamline-freehand-color:content-typewriter",
	});
}

export default Component;
