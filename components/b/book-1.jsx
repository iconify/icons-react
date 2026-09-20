import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e62wtrb5d.css';
import '../../css/s/sksbtdbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e62wtrb5d"/><path class="sksbtdbvq"/>`,
		"fallback": "lineicons:book-1",
	});
}

export default Component;
