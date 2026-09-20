import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-7xgub2u.css';
import '../../css/b/b88eryboh.css';
import '../../css/h/hbk7qgykw.css';
import '../../css/w/wjdt7iolf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b-7xgub2u"/><circle class="b88eryboh"/><path class="hbk7qgykw"/><circle class="wjdt7iolf"/></g>`,
		"fallback": "tdesign:image-1",
	});
}

export default Component;
