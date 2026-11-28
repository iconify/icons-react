import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwdfadcgv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ea3o1dbkq.css';
import '../../css/b/b6vsz4bbf.css';
import '../../css/s/so2kmrb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwdfadcgv secondary"/><g class="dt0cm9dhy primary"><path class="ea3o1dbkq"/><path class="b6vsz4bbf"/><path class="so2kmrb9v"/></g>`,
		"fallback": "iconaut:gallery-horizontal-duo",
	});
}

export default Component;
