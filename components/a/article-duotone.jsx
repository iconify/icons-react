import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnolt0wrb.css';
import '../../css/q/q6oeacb7k.css';
import '../../css/l/lflficb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnolt0wrb"/><path class="q6oeacb7k"/><path class="lflficb5w"/>`,
		"fallback": "stash:article-duotone",
	});
}

export default Component;
