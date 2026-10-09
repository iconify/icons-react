import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r683lebsl.css';
import '../../css/v/vwe1yk9rv.css';
import '../../css/n/nm93axxpm.css';
import '../../css/y/y842qjt3q.css';
import '../../css/i/i3vinab1m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r683lebsl"/><path class="vwe1yk9rv"/><path class="nm93axxpm"/><path class="y842qjt3q"/><path class="i3vinab1m"/>`,
		"fallback": "energy-icons:data-centre-cooling-20-bold",
	});
}

export default Component;
