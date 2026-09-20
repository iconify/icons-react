import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uymgdabjo.css';
import '../../css/x/x79_59blo.css';
import '../../css/v/v4u-w5b1v.css';
import '../../css/t/tbzygubyy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uymgdabjo"/><path class="x79_59blo"/><path class="v4u-w5b1v"/><path class="tbzygubyy"/>`,
		"fallback": "streamline-emojis:backhand-index-pointing-up-2",
	});
}

export default Component;
