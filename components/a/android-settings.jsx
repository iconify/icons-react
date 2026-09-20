import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xpj4vkbbe.css';
import '../../css/l/lohd83bha.css';
import '../../css/r/rpk44qb5q.css';
import '../../css/o/ouzjljbfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xpj4vkbbe"/><path class="lohd83bha"/><path class="rpk44qb5q"/><path class="ouzjljbfy"/></g>`,
		"fallback": "streamline-freehand-color:android-settings",
	});
}

export default Component;
