import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1ntc_v_g.css';
import '../../css/y/yc8urfbgx.css';
import '../../css/j/jgzaczl_g.css';
import '../../css/b/bt-e1yb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1ntc_v_g"/><path class="yc8urfbgx"/><path class="jgzaczl_g"/><path clip-rule="evenodd" class="bt-e1yb8o"/>`,
		"fallback": "solar:bonfire-bold",
	});
}

export default Component;
