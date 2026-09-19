import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-hqinbet.css';
import '../../css/x/xs145wb_x.css';
import '../../css/k/k3j1totiu.css';
import '../../css/w/w32au1bdo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-hqinbet"/><path class="xs145wb_x"/><path class="k3j1totiu"/><path class="w32au1bdo"/>`,
		"fallback": "devicon:cairo-wordmark",
	});
}

export default Component;
