import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1xy6nh9u.css';
import '../../css/b/b74ikwezj.css';
import '../../css/d/dq12o7ykb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="n1xy6nh9u"/><circle class="b74ikwezj"/><circle class="dq12o7ykb"/>`,
		"fallback": "uim:ellipsis-h",
	});
}

export default Component;
