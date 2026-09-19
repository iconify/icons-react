import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq_ua2hba.css';
import '../../css/l/l7pgvx7mc.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq_ua2hba"/><path class="l7pgvx7mc"/>`,
		"fallback": "devicon:ghost",
	});
}

export default Component;
