import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/om42epbiw.css';
import '../../css/k/kinx7jb3n.css';
import '../../css/a/a5ugidbaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="om42epbiw"/><path class="kinx7jb3n"/><path class="a5ugidbaj"/></g>`,
		"fallback": "reicon:document-previous",
	});
}

export default Component;
