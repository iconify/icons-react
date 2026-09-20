import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/d5nequhdi.css';
import '../../css/u/ujk-8v4-a.css';
import '../../css/u/u0ivgpm6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="d5nequhdi"/><path class="ujk-8v4-a"/><path class="u0ivgpm6f"/></g>`,
		"fallback": "streamline-freehand-color:famous-character-pokemon",
	});
}

export default Component;
