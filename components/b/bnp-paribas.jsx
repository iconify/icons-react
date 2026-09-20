import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmunhgz6s.css';
import '../../css/m/mv2f1fvox.css';
import '../../css/c/cgqt7gwti.css';

const viewBox = {"width":305.4,"height":49.966};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmunhgz6s"/><path class="mv2f1fvox"/><path class="cgqt7gwti"/>`,
		"fallback": "thesvg-color:bnp-paribas",
	});
}

export default Component;
