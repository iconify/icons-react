import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/h-kuz0-bd.css';
import '../../css/a/atkbl1bju.css';
import '../../css/x/x7wvjfqef.css';
import '../../css/p/p4ej8tn4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="h-kuz0-bd"/><path class="atkbl1bju"/><path class="x7wvjfqef"/><path class="p4ej8tn4q"/></g>`,
		"fallback": "icon-park:gold-medal",
	});
}

export default Component;
