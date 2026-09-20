import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_9kmbbto.css';
import '../../css/q/qjhlvsb3i.css';
import '../../css/q/qj361nbje.css';
import '../../css/d/dmcxc0b0p.css';
import '../../css/e/e1p6d4b6r.css';
import '../../css/c/cia76rb4x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_9kmbbto"/><path class="qjhlvsb3i"/><path class="qj361nbje"/><path class="dmcxc0b0p"/><path class="e1p6d4b6r"/><path class="cia76rb4x"/>`,
		"fallback": "streamline-emojis:anchor",
	});
}

export default Component;
