import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zubg1vb6f.css';
import '../../css/x/xivpjuiep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zubg1vb6f"/><path class="xivpjuiep"/>`,
		"fallback": "octicon:hubot-24",
	});
}

export default Component;
