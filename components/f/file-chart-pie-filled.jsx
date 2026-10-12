import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqt8x36bs.css';
import '../../css/n/n7c3xab-f.css';
import '../../css/s/s2m1i3bel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqt8x36bs"/><path class="n7c3xab-f"/><path class="s2m1i3bel"/>`,
		"fallback": "lucide-extended:file-chart-pie-filled",
	});
}

export default Component;
