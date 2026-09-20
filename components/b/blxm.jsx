import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybxut3bqm.css';
import '../../css/q/qapg4nbep.css';
import '../../css/a/ajilzybch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ybxut3bqm"/><path clip-rule="evenodd" class="qapg4nbep"/><path class="ajilzybch"/>`,
		"fallback": "token:blxm",
	});
}

export default Component;
