import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceo27ab2q.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z37f7-bek.css';
import '../../css/i/idily5riw.css';
import '../../css/y/yi7l4vbgw.css';
import '../../css/i/iagffughh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceo27ab2q secondary"/><g class="dt0cm9dhy primary"><path class="z37f7-bek"/><path class="idily5riw"/><path class="yi7l4vbgw"/><path class="iagffughh"/></g>`,
		"fallback": "iconaut:film-duo",
	});
}

export default Component;
