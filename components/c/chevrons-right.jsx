import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4kyeqb6q.css';
import '../../css/x/xmhb8kgbl.css';
import '../../css/w/wsnj7ybey.css';
import '../../css/s/sbrtnw41k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4kyeqb6q wm-a"/><path class="wm-a xmhb8kgbl"/><path class="wm-k wsnj7ybey"/><path class="sbrtnw41k wm-k"/>`,
		"fallback": "withicons-bauhaus:chevrons-right",
	});
}

export default Component;
