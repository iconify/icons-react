import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ke1-0sh6u.css';
import '../../css/n/n0qm8zbwd.css';
import '../../css/t/tbzygubyy.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ke1-0sh6u"/><path class="n0qm8zbwd"/><path class="tbzygubyy"/><path class="uymgdabjo"/>`,
		"fallback": "streamline-emojis:backhand-index-pointing-up-1",
	});
}

export default Component;
